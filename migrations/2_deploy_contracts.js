const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const NFTMarketplace = artifacts.require('NFTMarketplaceUpgradableV2');

module.exports = async function (deployer, network, accounts) {
    const rootAdmin = accounts[0];
  await deployProxy(NFTMarketplace, ["GPNFT", "GPD", "https://gateway.pinata.cloud/ipfs/", 
  "0x224153dbef77a3e2abf37df5bdc4e7ac75ebca9a"], { deployer });
};