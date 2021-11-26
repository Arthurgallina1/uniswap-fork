const UniswapV3Factory = artifacts.require("UniswapV3Factory");

module.exports = function (deployer) {
  deployer.deploy(UniswapV3Factory);
};
