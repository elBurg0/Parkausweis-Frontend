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
              data-inputmask-mask="[9-]AAA-999"
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

export default FormAddVisitorPass;
