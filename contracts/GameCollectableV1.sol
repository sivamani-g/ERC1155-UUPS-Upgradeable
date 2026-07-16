// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract GameCollectableV1 is ERC1155 {
    constructor()
        ERC1155("https://example.com/{id}.json")
    {}

    function mint(
        address account,
        uint256 id,
        uint256 amount
    ) public {
        _mint(account, id, amount, "");
    }

    function burn(
        address account,
        uint256 id,
        uint256 amount
    ) public {
        _burn(account, id, amount);
    }
}