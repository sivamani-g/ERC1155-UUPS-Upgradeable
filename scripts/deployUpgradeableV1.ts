import { network } from "hardhat";

async function main() {
  const { ethers } = await network.create();

  const implementation = await ethers.deployContract(
    "GameCollectableUpgradeableV1"
  );

  await implementation.waitForDeployment();

  console.log(
    "Implementation:",
    await implementation.getAddress()
  );

  const Proxy = await ethers.getContractFactory(
  "MyERC1967Proxy"
);

  const initData =
    implementation.interface.encodeFunctionData(
      "initialize"
    );

  const proxy = await Proxy.deploy(
    await implementation.getAddress(),
    initData
  );

  await proxy.waitForDeployment();

  console.log(
    "Proxy:",
    await proxy.getAddress()
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});