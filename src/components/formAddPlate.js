import React, { useState } from "react";
import { claimParkingPass } from "../util/ContractService";

const FormAddPlate = () => {
  const [plate, setPlate] = useState("");
  const [place, setPlace] = useState("");
  const [reqMsg, setReqMsg] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setReqMsg("Loading...");
    try {
      let req = await claimParkingPass(plate, place);
      setReqMsg("Transaction Hash: " + req.transactionHash);
    } catch (error) {
      console.log(error.message);
      setReqMsg("Failed: " + error.message);
    }
  }

  return (
    <div className="container">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <h2>Claim parking ticket</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter plate:
          <input
            type="text"
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
          />
        </label>
        <label>
          Enter place:
          <input
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      <p>{reqMsg}</p>
    </div>
  );
};

export default FormAddPlate;
