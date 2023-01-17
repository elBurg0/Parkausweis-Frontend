import Web3 from "web3";
import init_wallet from "./WalletService";
const abi = require("./abi2.json");

const web3 = new Web3(window.ethereum);
const contractAddress = "0xA5c387419f27329071E4366e931a3903bC2d302A";
const contract = new web3.eth.Contract(abi, contractAddress);

export async function claimParkingPass(numbersplate, place) {
  const account = await init_wallet();
  const req = await contract.methods
    .claimParkingPass(numbersplate.toLowerCase(), place)
    .send({ from: account });
  return req;
}

export async function claimVisitorPass(numbersplate) {
  const account = await init_wallet();
  const req = await contract.methods
    .claimVisitorPass(numbersplate.toLowerCase())
    .send({ from: account });
  return req;
}

export async function renewParkingPass() {
  const account = await init_wallet();
  const req = await contract.methods.renewParkingPass().send({ from: account });
  return req;
}

export async function confirmParkingPass(numbersplate) {
  const account = await init_wallet();
  const req = await contract.methods
    .confirmParkingPass(numbersplate.toLowerCase())
    .send({ from: account });
  return req;
}

export async function verifyParkingPass(numbersplate) {
  const account = await init_wallet();
  const req = await contract.methods
    .verifyParkingPass(numbersplate.toLowerCase())
    .call({ from: account });
  return req;
}
