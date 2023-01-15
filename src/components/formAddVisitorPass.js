import React, { useState } from "react";
import {claimVisitorPass} from '../util/ContractService'


const FormAddVisitorPass = () => {
    const [plate, setPlate] = useState("");
    const [reqMsg, setReqMsg] = useState("");

    async function handleSubmit (event){
      event.preventDefault();
      setReqMsg('Loading...');
      try{
        let req = await claimVisitorPass(plate);
        setReqMsg('Transaction Hash: ' + req.transactionHash);
      } catch (error) {
        console.log(error.message);
        setReqMsg('Failed: ' + error.message);
      };
    }
  
    return (
    <div>
      <h2>Add Visitor Tickets</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter vistor plate:
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
  
export default FormAddVisitorPass;
  