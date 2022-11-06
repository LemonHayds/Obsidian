//CreateFundraiseWeb3.js
return async function(){

    //Get contract details
    const ObsidianAddress = this.Contracts().ObsidianAddress
    const ObsidianAddressABI = this.Contracts().ObsidianAddressABI

    let web3
    let provider

    if (walletProvider == 'torus') {
        web3 = new Web3(window.torus.provider)
        provider = new ethers.providers.Web3Provider(window.torus.provider)
    } else {
        web3 = new Web3(window_ethereum)
        provider = new ethers.providers.Web3Provider(window_ethereum)
        await provider.send("eth_requestAccounts", [])
        const signer = provider.getSigner();
        await window_ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{
                chainId: '0x89',
            }]
        })
    }

    const Obsidian = new web3.eth.Contract(ObsidianAddressABI, ObsidianAddress);

    try {
        Obsidian.methods.createFundraise(nftCount, charityID, approveAmount, USDCAddress).send({
            from: wallet,
            gas
        }, async (err, txHash) => {
        })
    } catch (err) {
        console.warn(err)
    }
}