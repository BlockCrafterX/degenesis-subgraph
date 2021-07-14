const { expect } = require('chai');
const { ethers } = require('ethers');
const { deployMockContract } = require('ethereum-waffle');
const { getYAML } = require('./YAML.js');

const fs = require('fs');

const defiAbi = require('../build/DefiRound/abis/DefiRound.json');
const defiBytecode = require('../bytecode/DefiRound.json');

const coreAbi = require('../build/CoreEvent/abis/CoreEvent.json');
const coreBytecode = require('../bytecode/CoreEvent.json');

const WETH_ADDRESS = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const LINK_ADDRESS = '0x514910771af9ca656af840dff83e8264ecf986ca';
const BNT_ADDRESS = '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c';

// defi supported tokens
const coreSupportedTokens = [
    [ LINK_ADDRESS, 1000, false ],
    [ BNT_ADDRESS, 2000, false ]
]

describe('Test Defi Subgraph', () => {
    // this.timeout(0);

    let provider;
    let deployer;
    let user1;
    let treasury;
    let deployerAddress;
    let user1Address;
    let defiContract;

    before(async () => {

        provider = new ethers.providers.JsonRpcProvider();
        let currentBlock = await provider.getBlockNumber(); 

        // Will have to change for various whales etc
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

        const coreInterface = await new ethers.utils.Interface(coreAbi);
        const CoreFactory = await new ethers.ContractFactory(coreInterface, coreBytecode, deployer);
        coreContract = await CoreFactory.deploy(
            treasuryAddress, coreSupportedTokens
        );
        await coreContract.deployed();

        console.log(deployerAddress);
        console.log(user1Address);
        console.log(defiContract.address);
        console.log(coreContract.address);

        let yaml = getYAML(defiContract.address, coreContract.address, currentBlock);
        fs.writeFileSync('subgraph.yaml', yaml);
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