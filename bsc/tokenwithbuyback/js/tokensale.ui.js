var trackerMain = 'https://bscscan.com/';
var trackerTest = 'https://testnet.bscscan.com/';
var tokentracker;
var mainnet = 56;
var mainnetAlt = 56;
var testnet = 97;
var mainnetname = 'Binance Smart Chain (BSC) Mainnet';
var testnetname = 'Binance Smart Chain (BSC) Testnet';
var wrongnet = '<span class="err">Please use Binance Smart Chain (BSC) Mainnet</span>';

var tokenDecimals;
var tokenSymbol;
var price;
var qty = 0;
var buyAmount = 0;
var saleOn;
var available;

var contractSale;
var contractSaleSign;
var contractToken;

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
		"inputs": [],
		"name": "allRaised",
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
		"name": "allSold",
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
		"name": "buyToken",
		"outputs": [],
		"stateMutability": "payable",
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
				"internalType": "uint256",
				"name": "_qty",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "restartSale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "saleOn",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
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

var network;
var curnet;
var mainnetAlt;
var tracker;

var myAddress;
var signer;
var provider;

$(function() {
    $('#buyBtn').prop('disabled',true);
    getQR();
    connect();
});

async function connect() {
    
    provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    provider.on("network", (newNetwork, oldNetwork) => {
        if (oldNetwork) {
            getNetwork();
        }
    });
    
    ethereum.on('accountsChanged', (accounts) => {
        getNetwork();
    });
    
    ethereum.on('connect', (accounts) => {
        getNetwork();
    });
    
    
    getNetwork();
    
}

async function getNetwork() {
    network = await provider.getNetwork();
    curnet = network.chainId;

    if (curnet == mainnet || curnet == mainnetAlt) {
        $('#curnet').html(mainnetname);
        tracker = trackerMain;
        getAddress();
        init();
        
    } else if (curnet == testnet && test == true) {
        $('#curnet').html(testnetname);
        tracker = trackerTest;
        getAddress();
        init();
        
    } else {
        
        $('#curnet').html(wrongnet);
        $('#myAddr').html('');
        $('#buyBtn').prop('disabled',true);
        
    }
    
}

async function getAddress() {
    signer = provider.getSigner();
    
    try {
        myAddress = await signer.getAddress();
    } catch(err) {
        console.log(err);
        if (!myAddress && window.ethereum) {
            ethereum.request({ method: 'eth_requestAccounts' }).then(getNetwork);
        }
    }
    
    $('#myAddr').html(myAddress);
    if (myAddress) {
        $('#buyBtn').prop('disabled',false);
        $('#errors').html('');
    } else {
        $('#buyBtn').prop('disabled',true);
        $('#errors').html('Please connect to your wallet!');
    }
}


async function init() {
    
    $('#saleAddress').html(contractAddressSale);
    $('#saleAddress').attr('href', tracker + 'address/' + contractAddressSale);
    
    contractSale = new ethers.Contract(contractAddressSale, abiSale, provider);
    contractSaleSign = contractSale.connect(signer);
    
    contractToken = new ethers.Contract(contractAddressToken, abiToken, provider);
    
    // Load token data
    
    $('#tokenAddress').html(contractAddressToken);
    $('#tokenAddress').attr('href', tracker + 'token/' + contractAddressToken);
    
    var tokenName = await contractToken.name();
    $('#tokenName').html(tokenName);
            
    tokenSymbol = await contractToken.symbol();
    $('#tokenSymbol').html(tokenSymbol);
    
    tokenDecimals = await contractToken.decimals();
    $('#tokenDecimals').html(Number(tokenDecimals));
            
    var tokenSupply = await contractToken.totalSupply();
    $('#tokenSupply').html(Number(ethers.utils.formatUnits(tokenSupply, tokenDecimals)).toFixed(0));
    
    var myBalance = await contractToken.balanceOf(myAddress);
    $('#myTokens').html(Number(ethers.utils.formatUnits(myBalance, tokenDecimals)));
    
    // Load token sale data
    
    var quantity = await contractSale.saleQuantity();
    $('#quantity').html(Number(ethers.utils.formatUnits(quantity, tokenDecimals)));
    
    var sold = await contractSale.totalSold();
    $('#sold').html(Number(ethers.utils.formatUnits(sold, tokenDecimals)));
    
    $('#progress').attr('max', quantity);
    $('#progress').attr('value', sold);
    
    var unsold = await contractSale.unsoldQuantity();
    available = ethers.utils.formatUnits(unsold, tokenDecimals);
    $('#unsold').html(Number(available));
    
    price = await contractSale.tokenPrice();
    $('#price').html(ethers.utils.formatEther(price));
    
    var raised = await contractSale.totalRaised();
    $('#raised').html(ethers.utils.formatEther(raised));
    
    saleOn = await contractSale.saleOn();

    if (saleOn) {
        $('#status').html('<span style="color: green">ON</span>');
    } else if (saleOn == false) {
        $('#status').html('<span style="color: red">OFF</span>');
        $('#buyBtn').prop('disabled',true);
    }
    
    var allsold = await contractSale.allSold();
    $('#allsold').html(Number(ethers.utils.formatUnits(allsold, tokenDecimals)));
    
    var allraised = await contractSale.allRaised();
    $('#allraised').html(ethers.utils.formatEther(allraised));
    
    calcRatio();
    calcAmount();
}


$('#buyQty').on('keyup input', function() {
    var val = $('#buyQty').val();
    if (val < 0) {
        val = 0;
    } else if (val > Number(available)) {
        val = Number(available);
    }
    $('#buyQty').val(Number(val));
    calcAmount();
    
})

function calcRatio() {
    var ratio = 1 / Number(ethers.utils.formatEther(price));
    $('#ratio').html(ratio);
}

function calcAmount() {
    qty = $('#buyQty').val();
    buyAmount = Number(qty) * Number(ethers.utils.formatEther(price));
    $('#buyAmount').html(buyAmount);
}

$('#copyaddress').on('click', function(){
    copyToClipboard('#saleAddress');
});


function copyToClipboard(element) {
  var $temp = $("<textarea>");
  $("body").append($temp);
  $temp.val($(element).val()).select();
  document.execCommand("copy");
  $temp.remove();
}

function getQR() {
    
    var data = encodeURIComponent(contractAddressSale);
    $('#refqr').html('<img style="max-width: 80%" src="https://create.metaexchange.finance/php/qr.php?data=' + data + '">');
    $('#refd').attr('href', 'https://create.metaexchange.finance/php/qr.php?data=' + data);

}

$('#buyBtn').click(async function() {
        calcAmount();
        console.log(qty, buyAmount);
        if (qty > 0 && buyAmount > 0) {
            var payment = ethers.utils.parseEther(String(buyAmount));
            tx = await contractSaleSign.buyToken({value: payment, gasLimit: 500000});
            await tx.wait();
            init();
        }
});

$('#addToken').click(async function() {
    ethereum.request({
        method: 'wallet_watchAsset',
        params: {
        type: 'ERC20',
        options: {
            address: String(contractAddressToken),
            symbol: String(tokenSymbol),
            decimals: Number(tokenDecimals),
        },
    },
    })
});

$('#connect').on('click', async () => {
    
    if (window.ethereum) {
        
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            //const accounts = await ethereum.request({ method: 'eth_accounts' });
            var myAddress = accounts[0];
//            if (myAddress) {
            //$('#connected').html(myAddress);
            //$('#connected').fadeIn(1000).fadeOut(1000);
//        }
        } catch (error) {
            console.error(error);
        }
        
    } else {
        $('#nometamask').fadeIn(1000).fadeOut(1000);
    }
});