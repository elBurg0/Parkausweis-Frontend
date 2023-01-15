import React, { useState } from "react";
import {renewParkingPass} from '../util/ContractService'


const FormRenewPlate = () => {
    const [reqMsg, setReqMsg] = useState("");
    function handleSubmit (event){
      event.preventDefault();
      let req = renewParkingPass();
      setReqMsg(req.message);
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
  