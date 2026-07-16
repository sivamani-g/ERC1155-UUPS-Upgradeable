import { network } from "hardhat";

async function main() {
  const { ethers } = await network.create();

  const proxyAddress =
    "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";

  // Deploy V2
  const v2 = await ethers.deployContract(
    "GameCollectableUpgradeableV2"
  );

  await v2.waitForDeployment();

  const v2Address = await v2.getAddress();

  console.log("V2 Implementation:", v2Address);

  // Connect to Proxy using V1 ABI
  const proxy = await ethers.getContractAt(
    "GameCollectableUpgradeableV1",
    proxyAddress
  );

  // Upgrade Proxy V1 → V2
  const tx = await proxy.upgradeToAndCall(
    v2Address,
    "0x"
  );

  await tx.wait();

  console.log("Proxy upgraded to V2 ✅");
  console.log("Proxy Address:", proxyAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});