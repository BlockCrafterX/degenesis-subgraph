const { expect } = require('chai');
const { ethers } = require('ethers');
const { request, gql } = require('graphql-request');
const { deployMockContract } = require('ethereum-waffle');

const defiAbi = require('../build/DefiRound/abis/DefiRound.json');
const coreAbi = require('../build/CoreEvent/abis/CoreEvent.json');

const poolAbi = require('../abis/pool.json');
const ethPoolAbi = require('../abis/ethPool.json');

const WETH_WHALE_ADDRESS = "0x4a18a50a8328b42773268B4b436254056b7d70CE";
const USDC_WHALE_ADDRESS = "0x0548F59fEE79f8832C299e01dCA5c76F034F558e";

const WETH_ADDRESS = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const USDC_ADDRESS = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";

const LINK_ADDRESS = '0x514910771af9ca656af840dff83e8264ecf986ca';
const BNT_ADDRESS = '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c';

const WETH_ORACLE_ADDRESS = "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419";
const USDC_ORACLE_ADDRESS = "0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6";

const graphEndpoint = 'http://127.0.0.1:8000/subgraphs/name/Tokemak/tokemak-subgraph';

const DEFI_ADDRESS = '0x4826533B4897376654Bb4d4AD88B7faFD0C98528';
const CORE_ADDRESS = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';

describe('Test Defi Subgraph', () => {

    let provider;
    let deployer;
    let treasury;
    let wethWhale;
    let usdcWhale;
    let deployerAddress;
    let defiContract;
    let coreContract;
    let mockEthPool;
    let mockPool;
    let defiSupportedTokens;
    let coreSupportedTokens;

    before(async () => { 

        // Can possibly input fork from object in ganache provider
        provider = new ethers.providers.JsonRpcProvider();

        // Will have to change for various whales etc
        deployer = await provider.getSigner(0);
        treasury = await provider.getSigner(1);
        wethWhale = await provider.getSigner(WETH_WHALE_ADDRESS);
        usdcWhale = await provider.getSigner(USDC_WHALE_ADDRESS);
        
        deployerAddress = await deployer.getAddress();
        treasuryAddress = await treasury.getAddress();

        defiContract = await new ethers.Contract(DEFI_ADDRESS, defiAbi, deployer);
        // await defiContract.deployed();

        coreContract = await new ethers.Contract(CORE_ADDRESS, coreAbi, deployer);
        // await coreContract.deployed();

        mockEthPool = await deployMockContract(deployer, ethPoolAbi);
        mockPool = await deployMockContract(deployer, poolAbi);

        coreSupportedTokens = [
            [ LINK_ADDRESS, 1000, false ],
            [ BNT_ADDRESS, 2000, false ]
        ]
        defiSupportedTokens = [
            [ WETH_ADDRESS, WETH_ORACLE_ADDRESS, mockEthPool.address, 1000],
            [ USDC_ADDRESS, USDC_ORACLE_ADDRESS, mockPool.address, 100000]
        ]

        console.log(DEFI_ADDRESS);
        console.log(CORE_ADDRESS);
        console.log(defiContract.address);
        console.log(coreContract.address);
    });
    
    describe('Test supportedTokens handler', () => {
        before(async () => {
            await defiContract.connect(deployer).addSupportedTokens(defiSupportedTokens);
        })
        it('GraphQL query returns two token entities', async () => {
            const query = gql`
            {
                token (id: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48") {
                    name
                }
            }
            `
            let data = await request(graphEndpoint, query);
            console.log(data);
        });

        it('GraphQL query returns two oracle entities', async () => {

        });

        it('GraphQL query returns two pool entities')
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