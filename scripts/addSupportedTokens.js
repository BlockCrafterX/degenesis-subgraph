const hre = require('hardhat');
const { ethers } = hre;

const defiAbi = require('../build/DefiRound/abis/DefiRound.json');

const WETH_ADDRESS = "0xd0A1E359811322d97991E03f863a0C30C2cF029C"; // Kovan
const USDC_ADDRESS = "0xb7a4f3e9097c08da09517b5ab877f7a917224ede"; // Kovan

const ETH_ORACLE = "0x5c635c89bce3f49d84101e9988403bb18efb207f"; // Kovan
const USDC_ORACLE = "0xa73b861925e3e220a2254dfd20c507ef21eb292a"; // Kovan

const ETH_POOL = '0x01789ACc2bB3dd750734A359BF60Fe95Ad8b74B6'; // Deployed Kovan
const USDC_POOL = '0xE40aA506670E2E637CD276dAA564D92F17F25C0a'; // Deployed Kovan

// const TREASURY_ADDRESS = "0x8C23b37d1cbEA412Fc3f664d9d69cE56c0254138";

async function main () {

    let deployer = new ethers.Wallet(hre.config.networks.kovan.accounts[0]);
    deployer = deployer.connect(ethers.provider);

    const defiContract = new ethers.Contract(
        '0x5b9089C347e79160105E9447941df90306a24B82', defiAbi, deployer
    );

    console.log(await ethers.provider.getBlockNumber());
    console.log(await deployer.getAddress());
    console.log(defiContract.address);

    try {
        const tx = await defiContract.connect(deployer).addSupportedTokens(
        [
            [WETH_ADDRESS, ETH_ORACLE, ETH_POOL, 45],
            [USDC_ADDRESS, USDC_ORACLE, USDC_POOL, 200000]
        ]
    );
    await tx.wait();
    } catch (e) {
        console.log(e);
    }

    try {
        let data = await defiContract.getSupportedTokens();
        console.log(data);
    } catch (e) {
        console.log(e);
    }
}

main();