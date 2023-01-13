import React, { useState } from "react";
import Web3 from "web3";
import Tab from "./Tabs";
import abi from "./abi.json";

const MyComponent = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(
    abi,
    "0x90404922b94280e6579c02542eef80b2c9164486"
  );

  const handleConfirm = async () => {
    const accounts = await web3.eth.requestAccounts();
    contract.methods
      .confirmParkingPass("0x5B38Da6a701c568545dCfcB03FcB875f56beddC4", 89)
      .send({ from: accounts[0] })
      .then(console.log)
      .catch(console.error);
  };

  const handleClaimPass = async () => {
    const numbersplate = input1;
    const place = input2;

    const accounts = await web3.eth.requestAccounts();
    contract.methods
      .claimParkingPass(numbersplate, place)
      .send({ from: accounts[0] })
      .then(console.log)
      .catch(console.error);
    console.log(accounts[0]);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          padding: "20px",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <h3>Parking Verification</h3>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", padding: "20px" }}
        >
          <form>
            <input value={input1} onChange={(e) => setInput1(e.target.value)} />
          </form>
          <div>
            <input value={input2} onChange={(e) => setInput2(e.target.value)} />
          </div>
          <button type="button" onClick={handleClaimPass}>
            Request Parking Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
