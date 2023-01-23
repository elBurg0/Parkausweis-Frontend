import React, { useState } from "react";
import { claimVisitorPass } from "../util/ContractService";
import { StatusWidget } from "../util/WidgetService";

const FormAddVisitorPass = () => {
  const [plate, setPlate] = useState("");
  const [reqMsg, setReqMsg] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setReqMsg("Warten...");
    try {
      let req = await claimVisitorPass(plate);
      setReqMsg(req.transactionHash);
    } catch (error) {
      setReqMsg(error);
    }
  }

  return (
    <div className="container px-5 py-3 my-2 border rounded-3">
      <h2>Besucherparkausweis beantragen</h2>
      <p>Hier kann ein Besucherparkasuweis für 60 Tage beantragt werden. Nur ein gültiger Besucherparkausweis pro Bewohnerparkausweis ist gleichzeitig möglich.</p>
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
              data-inputmask-mask="[9-]AAA-999"
              onChange={(e) => setPlate(e.target.value)}
              required
            />
          </div>
          <div className="col-sm-5">
            <StatusWidget reqMsg={reqMsg} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Senden
        </button>
      </form>
    </div>
  );
};

export default FormAddVisitorPass;
