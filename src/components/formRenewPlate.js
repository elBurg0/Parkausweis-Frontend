import React, { useState } from "react";
import {renewParkingPass} from '../util/ContractService'


const FormRenewPlate = () => {
    const [reqMsg, setReqMsg] = useState("");

    async function handleSubmit (event){
      event.preventDefault();
      setReqMsg('Loading...');
      try{
        let req = await renewParkingPass();
        setReqMsg('Transaction Hash: ' + req.transactionHash);
      } catch (error) {
        console.log(error.message);
        setReqMsg('Failed: ' + error.message);
      };
    }
  
    return (
    <div>
      <h2>Renew Ticket</h2>
      <form onSubmit={handleSubmit}>
        <label>Renew Ticket:
        </label>
        <input type="submit" />
      </form>
      <p>{reqMsg}</p>
    </div>
    )
}
  
export default FormRenewPlate;
  