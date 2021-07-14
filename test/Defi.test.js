const { expect } = require('chai');
const { ethers } = require('ethers');
const { deployMockContract } = require('ethereum-waffle');

const defiAbi = require('../build/DefiRound/abis/DefiRound.json');
const defiBytecode = require('../bytecode/DefiRound.json');

describe('Test Defi Subgraph', () => {

    let provider;
    let deployer;
    let user1;
    let treasury;
    let deployerAddress;
    let user1Address;
    let defiContract;

    before(async () => {

        const WETH_ADDRESS = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

        provider = new ethers.providers.JsonRpcProvider();
        // console.log(await provider.getBlockNumber()); gets correct block nume

        deployer = await provider.getSigner(0);
        user1 = await provider.getSigner(1);
        treasury = await provider.getSigner(2);
        
        deployerAddress = await deployer.getAddress();
        user1Address = await user1.getAddress();
        treasuryAddress = await treasury.getAddress();

        const defiInterface = await new ethers.utils.Interface(defiAbi);
        const DefiFactory = await new ethers.ContractFactory(defiInterface, defiBytecode, deployer);
        defiContract = await DefiFactory.deploy(
            WETH_ADDRESS, treasuryAddress, 60000000
        );
        await defiContract.deployed();

        console.log(deployerAddress);
        console.log(user1Address);
        console.log(defiContract.address);

        // Initialize subgraph
    });
    
    describe('Test supportedTokens handler', () => {
        it('', async () => {

        });
    });

    describe('Test whitelist handler', () => {
        it('', async () => {

        });
    });
    
    describe('Test deposit handler', () => {
        it('', async () => {

        });
    });

    describe('Test withdraw handler', () => {
        it('', async () => {

        });
    });

    describe('Test transfer to treasury handler', () => {
        it('', async () => {

        });
    });

    describe('Test Genesis transfer handler', () => {
        it('', async () => {

        });
    });

    describe('Test finalize asset handler', () => {
        it('', async () => {

        });
    });
});