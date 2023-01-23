import React, { useState } from "react";
import { addWorkerAddress } from "../util/ContractService";
import { StatusWidget } from "../util/WidgetService";

const FormAddWorker = () => {
  const [workerAddress, setworkerAddress] = useState("");
  const [reqMsg, setReqMsg] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setReqMsg("Warten...");
    try {
      let req = await addWorkerAddress(workerAddress);
      setReqMsg(req.transactionHash);
    } catch (error) {
      setReqMsg(error);
    }
  }

  return (
    <div className="container px-5 py-3 my-2 border rounded-3">
      <h2>Bearbeiter hinzufügen</h2>
      <p>Hier können Wallets von Beamten hinzugefügt werden, damit diese Bewohnerausweise bestätigen können.</p>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="addressInput" className="col-sm-2 col-form-label">
            Adresse
          </label>
          <div className="col-sm-5">
            <input
              type="address"
              className="form-control"
              id="addressInput"
              data-inputmask-mask="[9-]AAA-999"
              onChange={(e) => setworkerAddress(e.target.value)}
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

export default FormAddWorker;
