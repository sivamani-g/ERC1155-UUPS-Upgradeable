import { network } from "hardhat";

async function main() {
  const { ethers } = await network.create();

  const proxyAddress =
    "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";

  const contract = await ethers.getContractAt(
    "GameCollectableUpgradeableV1",
    proxyAddress
  );

  const [owner] = await ethers.getSigners();

  console.log("Proxy Address:", proxyAddress);

  const mintTx = await contract.mint(
    owner.address,
    1,
    10
  );

  await mintTx.wait();

  const balance = await contract.balanceOf(
    owner.address,
    1
  );

  console.log("Token Balance:", balance.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});