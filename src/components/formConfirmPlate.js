import React, { useState } from "react";
import {confirmParkingPass} from '../util/ContractService'


const FormConfirmPass = () => {
    const [plate, setPlate] = useState("");
    const [reqMsg, setReqMsg] = useState("");

    async function handleSubmit (event){
      event.preventDefault();
      setReqMsg('Loading...');
      try{
        let req = await confirmParkingPass(plate);
        setReqMsg('Transaction Hash: ' + req.transactionHash);
      } catch (error) {
        setReqMsg('Failed: ' + error.message);
      };
    }
  
    return (
    <div>
      <h2>Confirm Plate</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter plate:
          <input 
            type="text" 
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      <p>{reqMsg}</p>
    </div>
    )
}
  
export default FormConfirmPass;
  