import { network } from "hardhat";

async function main() {
  const { ethers } = await network.create();

  const proxyAddress =
    "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";

  const contract = await ethers.getContractAt(
    "GameCollectableUpgradeableV2",
    proxyAddress
  );

  const [owner] = await ethers.getSigners();

  const before = await contract.balanceOf(
    owner.address,
    1
  );

  console.log(
    "Balance before burn:",
    before.toString()
  );

  const tx = await contract.burn(
    owner.address,
    1,
    2
  );

  await tx.wait();

  const after = await contract.balanceOf(
    owner.address,
    1
  );

  console.log(
    "Balance after burn:",
    after.toString()
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});