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
      <p>Hier kann die Verlängerung eines Bewohnerausweises beantragt werden.</p>
      <form onSubmit={handleSubmit}>
        <button type="submit" class="btn btn-primary">
          Senden
        </button>
      </form>
      <p class="col-sm-5 py-3">
        <StatusWidget reqMsg={reqMsg} />
      </p>
    </div>
  );
};

export default FormRenewPlate;
