require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
require('dotenv').config();

module.exports = {
  solidity: "0.6.11",
  defaultNetwork: 'hardhat',
  networks: {
    localhost: {
      url: 'http://0.0.0.0:8545',
      timeout: 1000000,
    },
    hardhat: { },
    mainnet: {
      url: 'https://eth-mainnet.alchemyapi.io/v2/' + process.env.ALCHEMY_KEY,
    },
  },
}
