import React, { useState } from "react";
import { verifyParkingPass } from "../util/ContractService";

const FormCheckPlate = () => {
  const [plate, setPlate] = useState("");
  const [reqMsg, setReqMsg] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setReqMsg("Warten...");
    try {
      let req = await verifyParkingPass(plate);
      if (req[2] < Math.floor(Date.now() / 1000)) {
        setReqMsg("Parkausweis abgelaufen!");
        return;
      }
      let dt = new Date(parseInt(req[2]) * 1000).toLocaleString();
      setReqMsg("Gültige Zone: " + req[1] + " Bis: " + dt);
    } catch (error) {
      if (error.code === 4001) {
        setReqMsg("Transaktion in Metamask durch Benutzer abgelehnt!");
        return;
      }
      setReqMsg(error.message);
    }
  }

  return (
    <div className="container px-5 py-3 my-2 border rounded-3">
      <h2>Bewohnerparkausweis überprüfen</h2>
      <p>
        Hier kann ein Nummernschild auf seine gültige Parkzone überprüft werden.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="plateInput" className="col-sm-2 col-form-label">
            Kennzeichen
          </label>
          <div className="col-sm-5">
            <input
              type="plate"
              className="form-control"
              id="plateInput"
              onChange={(e) => setPlate(e.target.value)}
              required
            />
          </div>
          <p className="col-sm-5">{reqMsg}</p>
        </div>
        <button type="submit" className="btn btn-primary">
          Senden
        </button>
      </form>
    </div>
  );
};

export default FormCheckPlate;
