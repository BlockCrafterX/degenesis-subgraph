require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
require('dotenv').config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.6.11",
  defaultNetwork: 'hardhat',
  networks: {
    localhost: {
      url: 'http://0.0.0.0:8545',
      timeout: 1000000,
    },
    hardhat: { },
    kovan: {
      url: 'https://eth-kovan.alchemyapi.io/v2/' + process.env.ALCHEMY_KEY,
      accounts: ['b84cacd4f00c07c9bad189de93eeb9cf04001d61ad6ec66f9ee2a44e51aeadd6']
    }
  },
}
