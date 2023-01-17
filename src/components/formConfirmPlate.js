import React, { useState } from "react";
import { confirmParkingPass } from "../util/ContractService";
import { StatusWidget } from "../util/WidgetService";

const FormConfirmPass = () => {
  const [plate, setPlate] = useState("");
  const [reqMsg, setReqMsg] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setReqMsg("Warten...");
    try {
      let req = await confirmParkingPass(plate);
      setReqMsg(req.transactionHash);
    } catch (error) {
      setReqMsg(error);
    }
  }

  return (
    <div className="container px-5 py-3 my-2 border rounded-3">
      <h2>Bewohnerparkausweis bestätigen</h2>
      <p>Hier kann ein Antrag auf einen Bewohnerausweis mit dem Nummernschild bestätigt werden.</p>
      <form onSubmit={handleSubmit}>
        <div class="row mb-3">
          <label for="plateInput" class="col-sm-2 col-form-label">
            Kennzeichen
          </label>
          <div className="col-sm-5">
            <input
              type="plate"
              class="form-control"
              id="plateInput"
              onChange={(e) => setPlate(e.target.value)}
              required
            />
          </div>
          <p class="col-sm-5">
            <StatusWidget reqMsg={reqMsg} />
          </p>
        </div>
        <button type="submit" class="btn btn-primary">
          Senden
        </button>
      </form>
    </div>
  );
};

export default FormConfirmPass;
