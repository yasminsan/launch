var tokenAddress;
var tokenSymbol;
var tokenDecimals;
var tokenImage;
    async function watchToken(tokenAddress, tokenSymbol, tokenDecimals, tokenImage) {
    
        ethereum
        .request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: tokenAddress,
                    symbol: tokenSymbol,
                    decimals: tokenDecimals,
                    image: tokenImage, 
                    
                },
            },
        })
    }