import { network } from "hardhat";

async function main() {
  const { ethers } = await network.create();

  const contract = await ethers.deployContract("GameCollectableV1");

  await contract.waitForDeployment();

  console.log(
    "GameCollectableV1 deployed to:",
    await contract.getAddress()
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});