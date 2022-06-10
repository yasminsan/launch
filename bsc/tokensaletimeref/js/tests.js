$('.erc').html(' (BEP-20)');
$('.changenet').each(function(){
     this.href += 'tokensaletimeref/';
});

var contractAddressMain = '0xB5BE0ae3BBbd5F31d1681e473cdDf912ff71938D';
var contractAddressTest = '0xB8ABEB7F0086dd96A8ef32BaC6bdEFBDaCb6c361';

var contractTokenBuilder1Main = '0x32D332487C8703D94C46F99E55b12D3BaAB45190';
var contractTokenBuilder1Test = '0x32D332487C8703D94C46F99E55b12D3BaAB45190';

var contractTokenBuilder2Main = '0x76079d9098b84cb28F2045c4fbC44EF6AAf5b0e7';
var contractTokenBuilder2Test = '0xA61Bc01643CC20e722761E35e4C270BbF4c36A03';

var contractTokenBuilder3Main = '0xeE4B8458741492455d7B9929F87342Aed9D4eF4b';
var contractTokenBuilder3Test = '0xBFFEfDCC6275bd0D6703fCe006bB69e2a06Fb4B6';

var contractTokenBuilder4Main = '0x592173bc112099c812216b62504a20aaeb38c679';
var contractTokenBuilder4Test = '0x34e18d89B43d0Ef859896D54D024072785D8C48f';

var contractTokenBuilder5Main = '0xF74A3016E6cb9C0f112F6F6ACf5e9A5dcFB13C66';
var contractTokenBuilder5Test = '0xA56750825ad3c76b53731AFaa7C9Eb982Fb7F0C3';

var contractTokenBuilder1;
var contractTokenBuilder2;
var contractTokenBuilder3;
var contractTokenBuilder4;
var contractTokenBuilder5;

var builderCost;

var contractThis;
var contractThisSign;
var contractThisToken;
var contractThisTokenSign;
var balanceEth;
var thisDecimals;
var thisTokenAddress;
var thisAddress;
var thisSymbol;
var thisUnsold;
var available;

var maxDecimals = 18;

var abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_cost",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "oldBeneficiary",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newBeneficiary",
				"type": "address"
			}
		],
		"name": "BeneficiarySet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "contractCreator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "contractAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenQuantity",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "salePrice",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "startTime",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "endTime",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "refPercent",
				"type": "uint256"
			}
		],
		"name": "ContractCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newCost",
				"type": "uint256"
			}
		],
		"name": "Cost",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "oldOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnerSet",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "beneficiary",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newBeneficiary",
				"type": "address"
			}
		],
		"name": "changeBeneficiary",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newcost",
				"type": "uint256"
			}
		],
		"name": "changeCost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "changeOwner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "cost",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
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
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "saleQty",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "salePrice",
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
				"internalType": "uint256",
				"name": "refPercent",
				"type": "uint256"
			}
		],
		"name": "createContract",
		"outputs": [
			{
				"internalType": "address",
				"name": "contractAddress",
				"type": "address"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "myContracts",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalBuilt",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
var abiSale = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_saleQuantity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_salePrice",
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
				"internalType": "uint256",
				"name": "_refPercent",
				"type": "uint256"
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
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			}
		],
		"name": "TokenSold",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_ref",
				"type": "address"
			}
		],
		"name": "buyToken",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "endTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
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
			}
		],
		"name": "refEarnings",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "refPercent",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "refTotal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "saleQuantity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalRaised",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSold",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unsoldQuantity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
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
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
];
var abiToken = [
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
				"name": "_dec",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_supply",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_tax1",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_address1",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tax2",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_address2",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_deflation",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_minSupply",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_owner",
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
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "addressTax1",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "addressTax2",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
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
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "burnt",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "deflation",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "initialSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "minSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
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
		"inputs": [],
		"name": "symbol",
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
		"inputs": [],
		"name": "tax1",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tax2",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalTax1",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalTax2",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
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
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
var abiTokenBuilder = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_cost",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "oldBeneficiary",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newBeneficiary",
				"type": "address"
			}
		],
		"name": "BeneficiarySet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newCost",
				"type": "uint256"
			}
		],
		"name": "Cost",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "oldOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnerSet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "tokenCreator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalSupply",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "decimals",
				"type": "uint8"
			}
		],
		"name": "TokenCreated",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "beneficiary",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newBeneficiary",
				"type": "address"
			}
		],
		"name": "changeBeneficiary",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newcost",
				"type": "uint256"
			}
		],
		"name": "changeCost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "changeOwner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "cost",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "totalSupply",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "decimals",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "createToken",
		"outputs": [
			{
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			}
		],
		"name": "getTokenData",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "totalSupply",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "decimals",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "myTokens",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
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
		"name": "mytokens",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
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
			}
		],
		"name": "tokens",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "totalSupply",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "decimals",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalBuilt",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

async function init() {

    contract = new ethers.Contract(contractAddress, abi, provider);
    contractSign = contract.connect(signer);
    
    builderCost = await contract.cost();
    $('#buildercost').html(ethers.utils.formatEther(builderCost));
    
    contr = '0x3eccf422aabe1ef7b0a2a6db4e74c32787fb5422';
    
    admin(contr);
    
}



// ============================================================ ADM ==========================================================================
async function admin(address) {
    
    $('#admin').show();
    
    $('#thisAddr').html(address);
    
    $('#viewThis').html('<a title="View on explorer" target="_blank" href="' + tracker + 'address/' + address + '">' + address + '</a>');
    
    thisAddress = address;
    contractThis = new ethers.Contract(address, abiSale, provider);
    contractThisSign = contractThis.connect(signer);
    
    thisTokenAddress = await contractThis.tokenAddress();
    $('#thisTokenAddress').html(thisTokenAddress);
    $('#viewThisToken').html('<a title="View on explorer" target="_blank" href="' + tracker + 'token/' + thisTokenAddress + '">' + thisTokenAddress + '</a>');
    
    contractThisToken = new ethers.Contract(thisTokenAddress, abiToken, provider);
    contractThisTokenSign = contractThisToken.connect(signer);
    
    var thisName = await contractThisToken.name();
    $('#thisName').html(thisName);
    
    thisSymbol = await contractThisToken.symbol();
    $('#thisSymbol').html(thisSymbol);
    
    thisDecimals = await contractThisToken.decimals();
    $('#thisDec').html(Number(thisDecimals));
    
    var allowance = await contractThisToken.allowance('0xb93a1a280b57ba561054d444c0eeaa89f7f62b84', address);
    console.log(allowance);
    var mybalance = await contractThisToken.balanceOf('0xb93a1a280b57ba561054d444c0eeaa89f7f62b84');
    console.log(mybalance);
    console.log(allowance > mybalance);
    
    var thisSaleQty = await contractThis.saleQuantity();
    $('#thisSaleQty').html(ethers.utils.formatUnits(thisSaleQty, thisDecimals));
    
    var thisTokenPrice = await contractThis.tokenPrice();
    console.log(Number(thisTokenPrice));
    $('#thisTokenPrice').html(ethers.utils.formatEther(thisTokenPrice));
    
    var thisSold = await contractThis.totalSold();
    $('#thisSold').html(ethers.utils.formatUnits(thisSold, thisDecimals));
    
    var thisRaised = await contractThis.totalRaised();
    $('#thisRaised').html(ethers.utils.formatEther(thisRaised));
    
    thisUnsold = await contractThis.unsoldQuantity();
    $('#thisUnsold').html(ethers.utils.formatUnits(thisUnsold, thisDecimals));
    
    console.log(Number(thisUnsold) > Number(mybalance));
    
    var thisStartStamp = await contractThis.startTime();
    var thisStart = new Date(Number(thisStartStamp) * 1000);
    $('#thisStart').html(thisStart);
    
    var thisEndStamp = await contractThis.endTime();
    var thisEnd = new Date(Number(thisEndStamp) * 1000);
    $('#thisEnd').html(thisEnd);
    
    var thisRefTotal = await contractThis.refTotal();
    $('#thisRefTotal').html(ethers.utils.formatEther(thisRefTotal));
    
    var thisRefPercent = await contractThis.refPercent();
    $('#thisRefPercent').html(Number(thisRefPercent)/10);
    
    var thisBalance = await provider.getBalance(address);
    available = ethers.utils.formatEther(thisBalance);
    $('#thisBalance').html(available);
    
    var thisStatus;
            
    if (Number(allowance) < Number(thisUnsold) && Number(mybalance) >= Number(thisUnsold)) {
        thisStatus = '<span style="color: red">Approve!</span>';
        $('#thisApprove').show();
    } else if (Number(mybalance) < Number(thisUnsold)) {
        thisStatus = '<span style="color: red">Add balance!</span>';
        $('#thisApprove').hide();
    } else if (Date.now() >= Number(thisStartStamp) * 1000 && Date.now() <= Number(thisEndStamp) * 1000 && Number(thisUnsold) > 0) {
        thisStatus = 'Active';
    } else if (Date.now() < Number(thisStartStamp) * 1000) {
        thisStatus = 'Upcoming';
    } else if (Date.now() > Number(thisEndStamp) * 1000 || Number(thisUnsold) <= 0) {
        thisStatus = 'Finished';
        $('#thisApprove').hide();
    }
    
    $('#thisStatus').html(thisStatus);
    
    $('#addToken').click(async function() {
        watchToken(thisTokenAddress, thisSymbol, thisDecimals);
    });
}

$('#thisApprove').click(async function() {
        if (thisAddress && thisUnsold) {
            tx = await contractThisTokenSign.approve(String(thisAddress), String(thisUnsold), {gasLimit: 100000});
            await tx.wait();
            init();
            admin(thisAddress);
        }
});

$('#thisWithdraw').click(async function() {
    var amount = $('#thisWithdrawAmount').val();
    if (amount != '' && amount > 0) {
        tx = await contractThisSign.withdraw(ethers.utils.parseEther(amount), {gasLimit: 100000});
        await tx.wait();
        admin(thisAddress);
    }
});

$('#thisWithdrawAll').click(async function() {
    if (available > 0) {
        tx = await contractThisSign.withdrawAll({gasLimit: 100000});
        await tx.wait();
        admin(thisAddress);
    }
});

// =============================================================================================================================

async function watchToken(tokenAddr, tokenSymb, tokenDeci) {
    
    ethereum
    .request({
        method: 'wallet_watchAsset',
        params: {
        type: 'ERC20',
        options: {
            address: String(tokenAddr),
            symbol: String(tokenSymb),
            decimals: String(tokenDeci),
        },
  },
})

}


$('#buildbtn').click(async function() {
    
    var newtknaddress = $('#newtknaddress').val();
    var newprice = $('#newprice').val();
    var newqty = $('#newqty').val();
    var newstartdate = $('#newstartdate').val();
    var newstart = Date.parse(newstartdate);
    var newenddate = $('#newenddate').val();
    var newend = Date.parse(newenddate);
    var newrefpercent = $('#newref').val();
    
    if (newtknaddress != '' && newqty > 0 && newprice && newprice >= 0.000000000000000001 && newrefpercent <= 100 && newstartdate && newenddate && newend > Date.now() && ethers.utils.isAddress(newtknaddress)) {
        $('#errors').html('');
        var token = new ethers.Contract(newtknaddress, abiToken, provider);
        var tokdecmals = await token.decimals();
        tx = await contractSign.createContract(String(newtknaddress), String(ethers.utils.parseUnits(newqty, tokdecmals)), String(ethers.utils.parseEther(newprice)), String(newstart/1000), String(newend/1000), String(Number(newrefpercent)*10), {value: builderCost});
        await tx.wait();
        init();
    } else if (newprice && newprice < 0.000000000000000001) {
        $('#errors').html('Error: too low token price!');
    } else if (newenddate && newend <= Date.now()) {
        $('#errors').html('Error: token sale must finish in the future!');
    } else {
        $('#errors').html('Error: fields are empty or incorrect!');
    }
    
});

$('#newprice').on('keyup input', function() {
    var price = $('#newprice').val();
    var tokens = 1 / Number(price);
    $('#tokperbnb').html(Number(tokens));
})

$('#newref').change(function() {
    refper = $('#newref').val();
    if (refper < 0) {
        refper = 0;
    }
    if (refper > 100) {
        refper = 100;
    }
    $('#newref').val(Number(refper).toFixed(1));
})

$('#thisWithdrawAmount').change(function() {
    var amount = $('#thisWithdrawAmount').val();
    if (amount < 0) {
        amount = 0;
    } else if (amount > available) {
        amount = available;
    }
    $('#thisWithdrawAmount').val(Number(amount));
})

// ================================================ UI =====================================================
async function ui(address) {
    
    $('#ui').show();
    
    $('.uiAddr').html(address);
    $('.uiAddrlnk').attr('href', tracker + 'address/' + address);
    
    if (curnet == testnet) {
        $('#istest').html('true');
    } else {
        $('#istest').html('false');
    }
     
    var contractSaleUI = new ethers.Contract(address, abiSale, provider);
    
    var tokenAddressUI = await contractSaleUI.tokenAddress();
    $('.tokenAddressUI').html(tokenAddressUI);
    $('.tokenAddressUIlnk').attr('href', tracker + 'token/' + tokenAddressUI);
    
    var contractTokenUI = new ethers.Contract(tokenAddressUI, abiToken, provider);
    
    var tokenNameUI = await contractTokenUI.name();
    $('#tokenNameUI').html(tokenNameUI);
            
    tokenSymbolUI = await contractTokenUI.symbol();
    $('#tokenSymbolUI').html(tokenSymbolUI);
    
    tokenDecimalsUI = await contractTokenUI.decimals();
    $('#tokenDecimalsUI').html(Number(tokenDecimalsUI));
            
    var tokenSupplyUI = await contractTokenUI.totalSupply();
    $('#tokenSupplyUI').html(Number(ethers.utils.formatUnits(tokenSupplyUI, tokenDecimalsUI)).toFixed(0));
    
    // Load token sale data
    
    var quantityUI = await contractSaleUI.saleQuantity();
    $('#quantityUI').html(Number(ethers.utils.formatUnits(quantityUI, tokenDecimalsUI)));
    
    priceUI = await contractSaleUI.tokenPrice();
    $('#priceUI').html(ethers.utils.formatEther(priceUI));
    
    var startStampUI = await contractSaleUI.startTime();
    var startUI = new Date(Number(startStampUI) * 1000);
    $('#startUI').html(startUI);
    
    var endStampUI = await contractSaleUI.endTime();
    var endUI = new Date(Number(endStampUI) * 1000);
    $('#endUI').html(endUI);
    
    var refPercentUI = await contractSaleUI.refPercent();
    $('#refPercentUI').html(Number(refPercentUI)/10);
    
    getQR(address);
}

function getQR(address) {
    
    var data = encodeURIComponent(address);
    $('#refqr').html('<img style="max-width: 80%" src="https://create.metaexchange.finance/php/qr.php?data=' + data + '">');
    $('#refd').attr('href', 'https://create.metaexchange.finance/php/qr.php?data=' + data);

}

$('#copyUIlink').on('click', function(){
    var $temp = $("<textarea>");
    $("body").append($temp);
    $temp.val($("#uiAddr").html()).select();
    document.execCommand("copy");
    $temp.remove();
});