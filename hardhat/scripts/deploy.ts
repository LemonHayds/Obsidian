import { ethers } from "hardhat";

async function main() {
  console.log('starting deploy script');
  const Obsidian = await ethers.getContractFactory("Obsidian");
  const obsidian = await Obsidian.deploy("0x1cb8c446C578F4480Fbd444f83869c6EdE9d1459");

  console.log('awaiting deployment');

  await obsidian.deployed();

  console.log(`deployed to ${obsidian.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
