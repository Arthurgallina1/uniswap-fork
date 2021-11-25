const Factory = artifacts.require("UniswapV2Factory");
const Token1 = artifacts.require("UniswapV2Factory");
const Token2 = artifacts.require("UniswapV2Factory");

module.exports = async function (deployer, network, addresses) {
  await deployer.deploy(Factory, addresses[0]);
  const factory = await Factory.deployed()

  if(network === 'mainnet') {
      //tokens are already deployed to the mainnet
      token1Address = '';
      token2Address = '';
  } else {
      // we need to deploy 2 erc20 tokens
      await deployer.deploy(Token1);
      await deployer.deploy(Token2);
      const token1 = await Token1.deployed();
      const token2 = await Token2.deployed();
      token1Address = token1.address;
      token2Address = token2.address;

    }


  await factory.createPair(token1Address, token2Address);

};
