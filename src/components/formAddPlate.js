import React, { useState } from "react";
import {claimParkingPass} from '../util/ContractService'


const FormAddPlate = () => {
    const [plate, setPlate] = useState("");
    const [place, setPlace] = useState("");
    const [reqMsg, setReqMsg] = useState("");

    function handleSubmit (event){
      event.preventDefault();
      let req = claimParkingPass(plate, place);
      setReqMsg(req.message);
    }
  
    return (
    <div>
      <h2>Claim parking ticket</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter plate:
          <input 
            type="text" 
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
          />
        </label>
        <label>Enter place:
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
    )
}
  
export default FormAddPlate;
  