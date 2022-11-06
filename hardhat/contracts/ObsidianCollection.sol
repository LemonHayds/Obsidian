// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import { IERC721 } from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { Obsidian } from "./Obsidian.sol";

contract ObsidianCollection is ERC721 {

  address public mainContract;
  uint256 public fundraiseId;

  constructor(string memory _name, string memory _symbol, address _mainContract, uint256 _fundraiseId) ERC721(_name, _symbol) {
    mainContract = _mainContract;
    fundraiseId = _fundraiseId;
  }

  modifier onlyObsidian() {
    require(msg.sender == mainContract, "must be called by the main obsidian contract");
    _;
  }

  function obsidianMint(address _owner, uint256 _tokenId) public onlyObsidian {
    _mint(_owner, _tokenId);
  }

  function obsidianBurn(uint256 _tokenId) public onlyObsidian {
    _burn(_tokenId);
  }

  function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
    string memory base = "https://ipfs.io/ipfs/";
    return string(bytes.concat(bytes(base), bytes(Obsidian(mainContract).getMetaIpfsHash(fundraiseId))));
  }

}

