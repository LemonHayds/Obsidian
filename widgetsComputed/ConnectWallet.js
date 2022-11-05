return function(walletChoice){

    if(walletChoice == 'torus'){
        const connectTorus = async () => {
            const torus = new Torus()
            window.torus = torus
            await window.torus.init({
                buildEnv: 'test', // default: production
                enableLogging: true, // default: false
                network: {
                host: 'mumbai', // default: mainnet
                chainId: 80001, // default: 1
                networkName: 'Mumbai Test Network' // default: Main Ethereum Network
                }
                // showTorusButton: false // default: true
            })
            await window.torus.login() // await torus.ethereum.enable()
            const web3 = new Web3(window.torus.provider)
            wallet = (await web3.eth.getAccounts())[0]
        }
        connectTorus()
    }
    else if(walletChoice == 'metamask'){
        const connectWalletHandler = async () => {
            const { ethereum } = window
            if (
                ethereum &&
                ethereum['providers'] &&
                ethereum.providers.find(({ isMetaMask }) => isMetaMask)
            ) {
                try {
                const MetamaskProvider = ethereum.providers.find(
                    ({ isMetaMask }) => isMetaMask
                )
                const accounts = await MetamaskProvider.request({
                    method: 'eth_requestAccounts'
                })
                wallet = accounts[0]

                } catch (err) {
                console.log(err)
                }
            } else if (ethereum && ethereum.isMetaMask) {
                try {
                const accounts = await ethereum.request({
                    method: 'eth_requestAccounts'
                })
                wallet = accounts[0]

                } catch (err) {
                    console.log(err)
                }
            }
        }
        connectWalletHandler()
    }

}