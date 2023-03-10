import React, { useState } from "react";
import {
  confirmParkingPass,
  declineParkingPass,
} from "../util/ContractService";
import { StatusWidget } from "../util/WidgetService";

function RequestItem({ plate, zone }) {
  const [reqMsg, setReqMsg] = useState("");

  async function handleSubmit_confirm(item) {
    setReqMsg("Warten...");
    try {
      let req = await confirmParkingPass(item);
      setReqMsg(req.transactionHash);
    } catch (error) {
      setReqMsg(error.message);
    }
  }

  async function handleSubmit_decline(item) {
    setReqMsg("Warten...");
    try {
      let req = await declineParkingPass(item);
      setReqMsg(req.transactionHash);
    } catch (error) {
      setReqMsg(error.message);
    }
  }

  if (plate) {
    return (
      <div key={plate} className="container">
        <li className="list-group-item rounded-3 my-1">
          <div className="row">
            <p className="col-sm my-auto">{plate}</p>
            <p className="col-sm my-auto">{zone}</p>
            <div className="col-sm my-auto"><StatusWidget reqMsg={reqMsg}/></div>
            <button
              className="btn btn-success col-sm-1 mx-2 me-auto"
              onClick={() => handleSubmit_confirm(plate)}
            >
              ✓
            </button>
            <button
              className="btn btn-danger col-sm-1 mx-2 me-auto"
              onClick={() => handleSubmit_decline(plate)}
            >
              X
            </button>
          </div>
        </li>
      </div>
    );
  }
}

export default RequestItem;
