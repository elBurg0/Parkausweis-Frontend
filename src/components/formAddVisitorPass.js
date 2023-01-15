import React, { useState } from "react";
import {claimVisitorPass} from '../util/ContractService'


const FormAddVisitorPass = () => {
    const [plate, setPlate] = useState("");
    const [reqMsg, setReqMsg] = useState("");

    function handleSubmit (event){
      event.preventDefault();
      let req = claimVisitorPass(plate);
      setReqMsg(req.message);
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
  