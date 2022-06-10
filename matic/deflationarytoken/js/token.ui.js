var network;
var curnet;
var mainnet;
var mainnetAlt;
var testnet;
var mainnetname;
var testnetname;
var wrongnet;
var contractAddress;
var abi;
var contract;
var contractSign;
var tracker;

var myAddress;
var signer;
var provider;

$('.ethereum').html('Thundercore (TT)');
$('.eth').html('TT');
$('.short').html('Thundercore');
$('.ethhref').attr('href','https://dappbuilder.org/thundercore/');
//$('.dappbrowser').html('<a target="_blank" href="https://metamask.io">Metamask</a>');
var trackerMain = 'https://viewblock.io/thundercore/address/';
var trackerTest = 'https://scan-testnet.thundercore.com/address/';
var tokentracker;
var mainnet = 108;
var mainnetAlt = 264;
var testnet = 18;
var mainnetname = 'Thundercore (TT) Mainnet';
var testnetname = 'Thundercore (TT) Testnet';
var wrongnet = '<span class="err">Please use Thundercore (TT) Mainnet or Testnet</span>';

$(function() {
    $('#buildbtn').prop('disabled',true);
    connect();
});

async function connect() {
    
    if (window.ethereum) {
        await ethereum.request({ method: 'eth_requestAccounts' });
    }
    
    provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    provider.on("network", (newNetwork, oldNetwork) => {
        if (oldNetwork) {
            getNetwork();
        }
    });
    
    ethereum.on('accountsChanged', (accounts) => {
        getNetwork();
    });
    
    
    getNetwork();
    
}

async function getNetwork() {
    network = await provider.getNetwork();
    curnet = network.chainId;
//    $('#curnetid').html(curnet);
    
    if (curnet == mainnet || curnet == mainnetAlt) {
        contractAddress = contractAddressMain;
        $('#curnet').html(mainnetname);
        tracker = trackerMain;
        getAddress();
        init();
        
    } else if (curnet == testnet) {
        contractAddress = contractAddressTest;
        $('#curnet').html(testnetname);
        tracker = trackerTest;
        getAddress();
        init();
        
    } else {
        
        $('#curnet').html(wrongnet);
        $('#myaddr').html('');
        $('#buildbtn').prop('disabled',true);
        $('#strHtml').html('');
        
    }
    
}

async function getAddress() {
    signer = provider.getSigner();
    myAddress = await signer.getAddress();
    $('#myaddr').html(myAddress);
    if (myAddress) {
        $('#buildbtn').prop('disabled',false);
        $('#errors').html('');
    } else {
        $('#buildbtn').prop('disabled',true);
        $('#errors').html('Please connect to your wallet!');
    }
}





async function startApp() {
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    var myAddress = await signer.getAddress();
    console.log(myAddress);
    
    var abi = [
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
				"name": "_supply",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_dec",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
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

    var contractAddress = $('#contract').val();
    const contract = new ethers.Contract(contractAddress, abi, provider);
    
    var tokenName = await contract.name();
    var tokenSymbol = await contract.symbol();
    var tokenSupply = await contract.totalSupply();
    var tokenDecimals = await contract.decimals();
    var myBalance = await contract.balanceOf(myAddress);
    
    $('#params').html('Name: ' + tokenName + '<br>Symbol: ' + tokenSymbol + '<br>Total supply: ' + ethers.utils.formatUnits(tokenSupply, tokenDecimals) + '<br>Decimals: ' + tokenDecimals);
    $('#mybalance').html(ethers.utils.formatUnits(myBalance, tokenDecimals));
    
}

async function watchToken(tokenAddr, tokenSymb, tokenDeci) {
    
    ethereum
    .request({
        method: 'wallet_watchAsset',
        params: {
        type: 'ERC20',
        options: {
            address: tokenAddr,
            symbol: tokenSymb,
            decimals: tokenDeci,
        },
  },
})

}