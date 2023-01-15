import Web3 from "web3";
const abi = require("./abi.json");

let account = '';

const web3 = new Web3(window.ethereum);
web3.eth.requestAccounts()
.then((accounts) => {
    if (accounts.length > 0) {
        account = accounts[0];
        console.log('Connected Wallet: ', account)
    } else {console.log('Please connect MetaMask account')}
})
.catch((error) => {
    console.log('Error while connecting wallet: ', error)
});

const contractAddress="0x6fdFc92F8E38e0d255C56510D3a8D5A940Bf28AE";
const contract = new web3.eth.Contract(abi, contractAddress);

export async function claimParkingPass(numbersplate, place){
    const req = await contract.methods
        .claimParkingPass(numbersplate, place)
        .send({ from: account })
    return req;
}

export async function claimVisitorPass(numbersplate){
    const req = await contract.methods
        .claimVisitorPass(numbersplate, Date.now())
        .send({ from: account })
    return req;
}

export async function renewParkingPass(){
    const req = await contract.methods
        .renewParkingPass()
        .send({ from: account })
    return req;
}

export function confirmParkingPass(numbersplate){
    const req = contract.methods
        .confirmParkingPass(numbersplate, Date.now())
        .send({ from: account })
    return req;
}

export function verifyParkingPass(numbersplate){
    const req = contract.methods
        .verifyParkingPass(numbersplate)
        .call({ from: account })
    console.log(req);
    return req;
}
