import Web3 from "web3";
import init_wallet from "./WalletService";
const abi = require("./abi.json");

const web3 = new Web3(window.ethereum);
const contractAddress="0x6fdFc92F8E38e0d255C56510D3a8D5A940Bf28AE";
const contract = new web3.eth.Contract(abi, contractAddress);

export async function claimParkingPass(numbersplate, place){
    const account = await init_wallet();
    const req = await contract.methods
        .claimParkingPass(numbersplate, place)
        .send({ from: account })
    return req;
}

export async function claimVisitorPass(numbersplate){
    const account = await init_wallet();
    const req = await contract.methods
        .claimVisitorPass(numbersplate, Date.now())
        .send({ from: account })
    return req;
}

export async function renewParkingPass(){
    const account = await init_wallet();
    const req = await contract.methods
        .renewParkingPass()
        .send({ from: account })
    return req;
}

export async function confirmParkingPass(numbersplate){
    const account = await init_wallet();
    const req = await contract.methods
        .confirmParkingPass(numbersplate, Date.now())
        .send({ from: account })
    return req;
}

export async function verifyParkingPass(numbersplate){
    const account = await init_wallet();
    const req = await contract.methods
        .verifyParkingPass(numbersplate)
        .call({ from: account })
    return req;
}
