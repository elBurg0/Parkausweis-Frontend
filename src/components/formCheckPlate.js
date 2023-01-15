import React, { useState } from "react";
import {verifyParkingPass} from '../util/ContractService'


const FormCheckPlate = () => {
    const [plate, setPlate] = useState("");
    const [reqMsg, setReqMsg] = useState("");

    async function handleSubmit (event){
      event.preventDefault();
      setReqMsg('Loading...');
      try{
        let req = await verifyParkingPass(plate);
        let dt = new Date(parseInt(req[2])).toLocaleString();
        setReqMsg('Allowed Zone: ' + req[1] + ' from: ' + dt);
      } catch (error) {
        console.log(error.message);
        setReqMsg('Failed: ' + error.message);
      };
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
      <p>{reqMsg}</p>
    </div>
    )
}
  
export default FormCheckPlate;
  