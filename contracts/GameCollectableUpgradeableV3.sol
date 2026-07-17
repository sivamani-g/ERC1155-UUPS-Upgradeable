// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./GameCollectableUpgradeableV2.sol";

contract GameCollectableUpgradeableV3
    is GameCollectableUpgradeableV2
{
    function mint(
        address to,
        uint256 id,
        uint256 amount
    ) public override {
        _mint(to, id, amount * 2, "");
    }
}