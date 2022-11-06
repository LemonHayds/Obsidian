//Contracts.js

return () => ({
  ObsidianAddress: '0x6D238b273799c378829Fca1F3a0C090591daE92e',
  ObsidianAddressABI: [
        {
            "inputs": [
            {
                "internalType": "address",
                "name": "_serviceWallet",
                "type": "address"
            }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "fundraiseId",
                "type": "uint256"
            }
            ],
            "name": "FileRevealed",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "fundraiseId",
                "type": "uint256"
            }
            ],
            "name": "FundraiseCompleted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "fundraiseId",
                "type": "uint256"
            }
            ],
            "name": "FundraiseCreated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [],
            "name": "NftMinted",
            "type": "event"
        },
        {
            "inputs": [
            {
                "internalType": "uint256",
                "name": "_fundraiseId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }
            ],
            "name": "burnAndReclaim",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_symbol",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_goal",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_price",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_endTime",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_metaIpfsHash",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_unrevealedFileBytesHash",
                "type": "string"
            }
            ],
            "name": "createFundraise",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
            ],
            "name": "fundraises",
            "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "contract ObsidianCollection",
                "name": "collection",
                "type": "address"
            },
            {
                "internalType": "address payable",
                "name": "creator",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "goal",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "metaIpfsHash",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "unrevealedFileBytesHash",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "revealedFileIpfsHash",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "numberMinted",
                "type": "uint256"
            }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
            ],
            "name": "fundraisesByCreator",
            "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "contract ObsidianCollection",
                "name": "collection",
                "type": "address"
            },
            {
                "internalType": "address payable",
                "name": "creator",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "goal",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "metaIpfsHash",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "unrevealedFileBytesHash",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "revealedFileIpfsHash",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "numberMinted",
                "type": "uint256"
            }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
            {
                "internalType": "uint256",
                "name": "_fundraiseId",
                "type": "uint256"
            }
            ],
            "name": "getMetaIpfsHash",
            "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
            {
                "internalType": "uint256",
                "name": "_fundraiseId",
                "type": "uint256"
            }
            ],
            "name": "mint",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
            {
                "internalType": "uint256",
                "name": "_fundraiseId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_revealedFileIpfsHash",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_newMetaIpfsHash",
                "type": "string"
            }
            ],
            "name": "revealFile",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "serviceWallet",
            "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
            ],
            "stateMutability": "view",
            "type": "function"
        }
]
})
