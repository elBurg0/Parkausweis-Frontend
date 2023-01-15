import Web3 from "web3";

export default async function init_wallet(){
    
    if (window.ethereum){
        // For initial startup
        try {
            const web3 = new Web3(window.ethereum);
            const accounts = await web3.eth.requestAccounts();
            const account = accounts[0];
            return account
        } catch (error) {
            return 'Please connect wallet'
        }
    } else {
        return 'Please install MetaMask'
    }
}

/*.then((accounts) => {
    if (accounts.length > 0) {
        const account = accounts[0];
        console.log('Connected Wallet: ', account)
        account = account
    } else {console.log('Please connect MetaMask account')}
})
.catch((error) => {
    console.log('Error while connecting wallet: ', error)
});
*/