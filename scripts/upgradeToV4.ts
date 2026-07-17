import { network } from "hardhat";

async function main() {
  const { ethers } = await network.create();

  const proxyAddress =
    "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";

  const v4 = await ethers.deployContract(
    "GameCollectableUpgradeableV4"
  );

  await v4.waitForDeployment();

  const v4Address = await v4.getAddress();

  console.log("V4 Implementation:", v4Address);

  const proxy = await ethers.getContractAt(
    "GameCollectableUpgradeableV4",
    proxyAddress
  );

  const tx = await proxy.upgradeToAndCall(
    v4Address,
    "0x"
  );

  await tx.wait();

  console.log("Proxy upgraded from V3 to V4 ✅");
  console.log("Proxy Address:", proxyAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});