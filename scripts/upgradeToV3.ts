import { network } from "hardhat";

async function main() {
  const { ethers } = await network.create();

  const proxyAddress =
    "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";

  const v3 = await ethers.deployContract(
    "GameCollectableUpgradeableV3"
  );

  await v3.waitForDeployment();

  const v3Address = await v3.getAddress();

  console.log("V3 Implementation:", v3Address);

  const proxy = await ethers.getContractAt(
    "GameCollectableUpgradeableV3",
    proxyAddress
  );

  const tx = await proxy.upgradeToAndCall(
    v3Address,
    "0x"
  );

  await tx.wait();

  console.log("Proxy upgraded from V2 to V3 ✅");
  console.log("Proxy Address:", proxyAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});