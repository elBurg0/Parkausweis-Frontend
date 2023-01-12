import React, { useState } from "react";
import Web3 from "web3";
import abi from "./abi.json";

const MyComponent = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(
    abi,
    "0x90404922b94280e6579c02542eef80b2c9164486"
  );

  console.log(contract);

  const handleSubmit = (event) => {
    event.preventDefault();
    contract.methods.getParkingPass("ABC");
  };

  const handleClaimPass = async () => {
    const numbersplate = "XYZ123";
    const place = "Berlin";

    const accounts = await web3.eth.getAccounts();
    contract.methods
      .claimParkingPass(numbersplate, place)
      .send({ from: accounts[0] })
      .then(console.log)
      .catch(console.error);
    console.log("Hello");
  };

  return (
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
          <input value={input3} onChange={(e) => setInput3(e.target.value)} />
          <button type="button" onSubmit={handleClaimPass}>
            Check
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyComponent;
