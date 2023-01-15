import React, { useState } from "react";
import {verifyParkingPass} from '../util/ContractService'


const FormCheckPlate = () => {
    const [plate, setPlate] = useState("");
    const [reqMsg, setReqMsg] = useState("");

    function handleSubmit (event){
      event.preventDefault();
      let req = verifyParkingPass(plate);
      setReqMsg(req.message);
    }
  
    return (
    <div>
      <h2>Check Plate</h2>
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
      <p>Message: {reqMsg}</p>
    </div>
    )
}
  
export default FormCheckPlate;
  