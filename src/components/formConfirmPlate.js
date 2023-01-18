import React, { useState } from "react";
import { confirmParkingPass, declineParkingPass } from "../util/ContractService";
import { StatusWidget } from "../util/WidgetService";

const FormConfirmPass = () => {
  const [plate, setPlate] = useState("");
  const [reqMsg, setReqMsg] = useState("");

  async function handleSubmit_confirm(event) {
    event.preventDefault();
    setReqMsg("Warten...");
    try {
      let req = await confirmParkingPass(plate);
      setReqMsg(req.transactionHash);
    } catch (error) {
      setReqMsg(error);
    }
  }

  async function handleSubmit_decline(event) {
    event.preventDefault();
    setReqMsg("Warten...");
    try {
      let req = await declineParkingPass(plate);
      setReqMsg(req.transactionHash);
    } catch (error) {
      setReqMsg(error);
    }
  }

  return (
    <div className="container px-5 py-3 my-2 border rounded-3">
      <h2>Bewohnerparkausweis-Anfragen bearbeiten </h2>
      <p>Hier kann ein Antrag auf einen Bewohnerausweis mit dem Nummernschild bestätigt oder abgelehnt werden.</p>
      <form>
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
        <button className="btn btn-success" onClick={handleSubmit_confirm}>
          Bestätigen
        </button>
        <button className="btn mx-2 btn-danger" onClick={handleSubmit_decline}>
          Löschen
        </button>
      </form>
    </div>
  );
};

export default FormConfirmPass;
