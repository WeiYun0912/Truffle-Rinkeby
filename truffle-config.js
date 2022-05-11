var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "錢包某位使用者的私鑰";
var infuraEndPoint = "剛剛申請的 Rinkeby Infura EndPoints";
var etherscanAPIKey = "剛剛申請的 Etherscan API Key";
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(mnemonic, infuraEndPoint);
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: etherscanAPIKey,
  },
  compilers: {
    solc: {
      version: "^0.4.26",
    },
  },
};
