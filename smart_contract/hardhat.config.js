require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/gaSihNqI0uxlKb2bZmf26RsjgnIvu65B',
      accounts: ['b8b193667faa093691a9c3970bdb941e1578adb483c127b81c792547780fe70f'],
    },
  },
};