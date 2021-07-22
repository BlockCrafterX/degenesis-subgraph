/**
 * Deploy to Kovan
 */
const hre = require('hardhat');
const ethers = hre.ethers;
// const { getYAML } = require('../test/YAML.js');

// const fs = require('fs');

const defiAbi = require('../build/DefiRound/abis/DefiRound.json');
const defiBytecode = require('../bytecode/DefiRound.json');

// const coreAbi = require('../build/CoreEvent/abis/CoreEvent.json');
// const coreBytecode = require('../bytecode/CoreEvent.json');

const WETH_ADDRESS = "0xd0A1E359811322d97991E03f863a0C30C2cF029C"; // Kovan
// const USDC_ADDRESS = "0xb7a4f3e9097c08da09517b5ab877f7a917224ede"; // Kovan

// const LINK_ADDRESS = '0x514910771af9ca656af840dff83e8264ecf986ca';
// const BNT_ADDRESS = '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c';

const TREASURY_ADDRESS = '0x8C23b37d1cbEA412Fc3f664d9d69cE56c0254138';

// const coreSupportedTokens = [
//     [ LINK_ADDRESS, 1000, false ],
//     [ BNT_ADDRESS, 2000, false ]
// ];

async function main() {

    // let provider = new ethers.providers.Web3Provider();
    // let currentBlock = await provider.getBlockNumber();

    let provider = new ethers.providers.getDefaultProvider();
    let deployer = new ethers.Wallet(hre.config.networks.kovan.accounts[0]);
    deployer = deployer.connect(provider);

    const defiInterface = await new ethers.utils.Interface(defiAbi);
    const defiFactory = await new ethers.ContractFactory(defiInterface, defiBytecode, deployer);
    defiContract = await defiFactory.deploy(
        WETH_ADDRESS, TREASURY_ADDRESS, 60000000
    );
    await defiContract.deployed();
    
    // const coreInterface = await new ethers.utils.Interface(coreAbi);
    // const coreFactory = await new ethers.ContractFactory(coreInterface, coreBytecode, deployer);
    // coreContract = await coreFactory.deploy(
    //     treasuryAddress, coreSupportedTokens
    // );
    // await coreContract.deployed();

    // console.log(defiContract.address);
    // console.log(coreContract.address);

    // fs.writeFileSync("subgraph.yaml", getYAML(defiContract.address, coreContract.address, currentBlock));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });



