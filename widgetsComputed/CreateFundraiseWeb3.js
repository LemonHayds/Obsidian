//CreateFundraiseWeb3.js
return async function(productName, theSymbol, fundingGoal, perPrice, startTime, endTime){

    const walletProvider = this.GetCurrentUserWalletProvider()
    //Get contract details
    const ObsidianAddress = this.Contracts().ObsidianAddress
    const ObsidianAddressABI = this.Contracts().ObsidianAddressABI

    let web3
    let provider

    if (walletProvider == 'torus') {
        web3 = new Web3(window.torus.provider)
        provider = new ethers.providers.Web3Provider(window.torus.provider)
    } else {
        web3 = new Web3(window.ethereum)
        provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", [])
        const signer = provider.getSigner();
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{
                chainId: '0x89',
            }]
        })
    }

    const Obsidian = new web3.eth.Contract(ObsidianAddressABI, ObsidianAddress);

    var gas;

    console.log(fundingGoal)
    console.log(perPrice)

    try {
        Obsidian.methods.createFundraise(productName, theSymbol, ethers.utils.parseEther('1'), ethers.utils.parseEther('0.25'), startTime, endTime, $getUser('firstCID'), '').send({
            from: wallet,
            gas
        }, async (err, txHash) => {
        })
    } catch (err) {
        console.warn(err)
    }
}