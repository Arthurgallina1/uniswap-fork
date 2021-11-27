const contract = require('@truffle/contract')
const UniswapV3FactoryJSON = require('@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json')
const UniswapV3Factory = contract(UniswapV3FactoryJSON)

UniswapV3Factory.setProvider(this.web3._provider)

module.exports = function (deployer, network, accounts) {
  deployer.deploy(UniswapV3Factory, { from: accounts[0] })
}
