import React, { useState } from "react";
import { renewParkingPass } from "../util/ContractService";
import { StatusWidget } from "../util/WidgetService";

const FormRenewPlate = () => {
  const [reqMsg, setReqMsg] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setReqMsg("Warten...");
    try {
      let req = await renewParkingPass();
      setReqMsg(req.transactionHash);
    } catch (error) {
      setReqMsg(error);
    }
  }

  return (
    <div className="container px-5 py-3 my-2 border rounded-3">
      <h2>Verlängerung des Bewohnerparkausweis beantragen</h2>
      <p>Hier kann die Verlängerung des Bewohnerausweises der aktuell verbundenen Wallet beantragt werden.</p>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="btn btn-primary">
          Senden
        </button>
      </form>
      <div className="col-sm-5 py-3">
        <StatusWidget reqMsg={reqMsg} />
      </div>
    </div>
  );
};

export default FormRenewPlate;
