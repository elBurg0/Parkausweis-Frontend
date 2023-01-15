import Web3 from "web3";
let connectedAccount = ""

export default async function init_wallet(){
    
    if (window.ethereum){
        // For initial startup
        try {
            const web3 = new Web3(window.ethereum);
            web3.eth.requestAccounts()
            .then((accounts) => {
                if (accounts.length > 0) {
                    const account = accounts[0];
                    console.log('Connected Wallet: ', account)
                    connectedAccount = account
                } else {console.log('Please connect MetaMask account')}
            })
            .catch((error) => {
                console.log('Error while connecting wallet: ', error)
            });
        } catch (error) {
            console.log('Error while connecting wallet: ', error)
        }
    } else {
        console.log('Please install MetaMask')
    }
    return connectedAccount
}