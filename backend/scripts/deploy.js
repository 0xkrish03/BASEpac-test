const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const balance = await deployer.getBalance();
  console.log("Account balance:", ethers.utils.formatEther(balance), "ETH");

  const TapToMine = await ethers.getContractFactory("TapToMine");
  const tapToMine = await TapToMine.deploy(ethers.utils.parseEther("0.01"));
  console.log("Contract deployed to address:", tapToMine.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
