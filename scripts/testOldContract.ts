import { network } from "hardhat";

async function main() {
  const { ethers } = await network.create();

  const contractAddress =
    "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const contract = await ethers.getContractAt(
    "GameCollectableV1",
    contractAddress
  );

  console.log("Contract Address:", await contract.getAddress());

  console.log("Trying to call burn()...");

  const tx = await contract.burn(
    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    1,
    1
  );

  await tx.wait();

  console.log("Burn successful");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});