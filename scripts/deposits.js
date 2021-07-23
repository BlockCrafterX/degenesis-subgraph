const hre = require('hardhat');
const { ethers } = hre;

const defiAbi = require('../build/DefiRound/abis/DefiRound.json');
const erc20Abi = require('../build/ERC20/abis/ERC20.json');

const WETH_ADDRESS = "0xd0A1E359811322d97991E03f863a0C30C2cF029C"; // Kovan
const USDC_ADDRESS = "0xb7a4f3e9097c08da09517b5ab877f7a917224ede"; // Kovan

async function main () {

    let deployer = new ethers.Wallet(hre.config.networks.kovan.accounts[0], ethers.provider);
    let ethDepositor = new ethers.Wallet(hre.config.networks.kovan.accounts[1], ethers.provider);
    let usdcDepositor = new ethers.Wallet(hre.config.networks.kovan.accounts[2], ethers.provider);

    const defiContract = new ethers.Contract(
        '0x746946D6DDc55bA8F3fEd92A6C02e96CdbA1C3dD', defiAbi, deployer
    )
    const usdcContract = new ethers.Contract(
        USDC_ADDRESS, erc20Abi, deployer
    );

    const ethDepositorAddr = await ethDepositor.getAddress();
    const usdcDepositorAddr = await usdcDepositor.getAddress();
    console.log(await ethers.provider.getBlockNumber());
    console.log(await deployer.getAddress());
    console.log(ethDepositorAddr);
    console.log(usdcDepositorAddr);

    

    try {
        // const ethTx = await defiContract.connect(ethDepositor).deposit(
        //     [WETH_ADDRESS, 1], [],
        //     {
        //         gasLimit: 2100000,
        //         gasPrice: 100000000000, 
        //         value: 1
        //     }
        // );
        // await ethTx.wait();
        
        // await usdcContract.connect(usdcDepositor).approve(defiContract.address, ethers.constants.MaxUint256,
        //     {
        //         gasLimit: 210000,
        //         gasPrice: 100000000000,
        //     }
        // );

        console.log(await usdcContract.allowance(usdcDepositorAddr, defiContract.address));

        const usdcTx = await defiContract.connect(usdcDepositor).deposit(
            [USDC_ADDRESS, 1000], [],
                {
                gasLimit: 210000,
                gasPrice: 100000000000
            }
        );
        await usdcTx.wait();
    } catch (e) {
        console.log(e);
    }

    console.log(await defiContract.getAccountData(ethDepositorAddr));
    console.log(await defiContract.getAccountData(usdcDepositorAddr));

}

main ();

