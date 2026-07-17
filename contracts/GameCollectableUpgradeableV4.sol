// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./GameCollectableUpgradeableV3.sol";

contract GameCollectableUpgradeableV4
    is GameCollectableUpgradeableV3
{
    function mint(
        address to,
        uint256 id,
        uint256 amount,
        uint256 multiplier
    ) public {
        _mint(to, id, amount * multiplier, "");
    }
}