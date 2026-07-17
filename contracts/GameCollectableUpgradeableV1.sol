// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract GameCollectableUpgradeableV1
    is Initializable,
      ERC1155Upgradeable,
      UUPSUpgradeable,
      OwnableUpgradeable
{
    function initialize()
        public
        initializer
    {
        __ERC1155_init("https://example.com/{id}.json");
        __Ownable_init(msg.sender);
    }
function mint(
    address to,
    uint256 id,
    uint256 amount
) public virtual {
    _mint(to, id, amount, "");
}

    function _authorizeUpgrade(
        address newImplementation
    )
        internal
        override
        onlyOwner
    {}
}