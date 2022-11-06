// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./ObsidianCollection.sol";

contract Obsidian {

  struct Fundraise {
    uint256 id;
    ObsidianCollection collection;
    address payable creator;
    uint256 goal;
    uint256 price;
    uint256 startTime;
    uint256 endTime;
    string metaIpfsHash;
    string unrevealedFileBytesHash;
    string revealedFileIpfsHash;
    uint256 numberMinted;
  }

  event FundraiseCreated (
    uint256 fundraiseId
  );

  event FundraiseCompleted (
    uint256 fundraiseId
  );

  event FileRevealed (
    uint256 fundraiseId
  );

  event NftMinted (

  );

  address public serviceWallet;
  Fundraise[] public fundraises;
  mapping(address => Fundraise[]) public fundraisesByCreator;

  modifier onlyServiceWallet() {
    require(msg.sender == serviceWallet, "must be service wallet");
    _;
  }

  constructor(address _serviceWallet) {
    serviceWallet = _serviceWallet;
  }

  function createFundraise(string memory _name, string memory _symbol, uint256 _goal, uint256 _price, uint256 _startTime, uint256 _endTime, string memory _metaIpfsHash, string memory _unrevealedFileBytesHash) external {
    require(_goal > 0, "failed: _goal > 0");
    require(_price > 0, "failed: _price > 0");
    require(_endTime > block.timestamp, "failed: _endTime > block.timestamp");
    uint256 id = fundraises.length;
    ObsidianCollection collection = new ObsidianCollection(_name, _symbol, address(this), id);
    Fundraise memory fundraise = Fundraise(id, collection, payable(msg.sender), _goal, _price, _startTime, _endTime, _metaIpfsHash, _unrevealedFileBytesHash, "", 0);
    fundraises.push(fundraise);
    fundraisesByCreator[msg.sender].push(fundraise);
    emit FundraiseCreated(id);
  }

  function mint(uint256 _fundraiseId) external payable {
    Fundraise memory fundraise = fundraises[_fundraiseId];
    require(fundraise.goal > 0, "invalid fundraise id");
    require(block.timestamp >= fundraise.startTime, "fundraise not started yet");
    require(block.timestamp <= fundraise.endTime, "fundraise has already completed");
    require(fundraise.numberMinted * fundraise.price < fundraise.goal, "fundraise amount already met");
    require(msg.value == fundraise.price, "incorrect amount paid");

    // do the actual mint via the collection contract
    uint256 tokenId = fundraise.numberMinted + 1;
    fundraise.collection.obsidianMint(msg.sender, tokenId);
    fundraises[_fundraiseId].numberMinted += 1;

    if (fundraises[_fundraiseId].numberMinted * fundraise.price >= fundraise.goal) {
      // we just completed the fundraise
      fundraise.creator.transfer(fundraises[_fundraiseId].numberMinted * fundraise.price);
      emit FundraiseCompleted(_fundraiseId);
    }
  }

  function revealFile(uint256 _fundraiseId, string memory _revealedFileIpfsHash, string memory _newMetaIpfsHash) external onlyServiceWallet {
    Fundraise memory fundraise = fundraises[_fundraiseId];
    require(fundraise.goal > 0, "invalid fundraise id");
    require(fundraise.numberMinted * fundraise.price >= fundraise.goal, "fundraise not filled");
    require(bytes(fundraise.revealedFileIpfsHash).length == 0, "file already revealed");
    require(bytes(_revealedFileIpfsHash).length > 0, "_revealedFileIpfsHash is blank");
    require(bytes(_newMetaIpfsHash).length > 0, "_newMetaIpfsHash is blank");

    fundraises[_fundraiseId].revealedFileIpfsHash = _revealedFileIpfsHash;
    fundraises[_fundraiseId].metaIpfsHash = _newMetaIpfsHash;

    emit FileRevealed(_fundraiseId);
  }

  function burnAndReclaim(uint256 _fundraiseId, uint256 _tokenId) external {
    Fundraise memory fundraise = fundraises[_fundraiseId];
    require(fundraise.goal > 0, "invalid fundraise id");
    require(block.timestamp > fundraise.endTime, "fundraise not ended");
    require(fundraise.numberMinted * fundraise.price < fundraise.goal, "target met, cannot reclaim");
    require(fundraise.collection.ownerOf(_tokenId) == msg.sender, "you don't own this token");
    fundraise.collection.obsidianBurn(_tokenId);
    payable(msg.sender).transfer(fundraise.price);
  }

  function getMetaIpfsHash(uint256 _fundraiseId) public view returns(string memory) {
    return fundraises[_fundraiseId].metaIpfsHash;
  }

}
