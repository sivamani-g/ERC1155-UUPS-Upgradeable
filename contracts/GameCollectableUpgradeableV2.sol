// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./GameCollectableUpgradeableV1.sol";

contract GameCollectableUpgradeableV2
    is GameCollectableUpgradeableV1
{
    function burn(
        address account,
        uint256 id,
        uint256 amount
    ) public {
        _burn(account, id, amount);
    }
}