import React, { useState } from "react";
import { claimParkingPass } from "../util/ContractService";
import { StatusWidget } from "../util/WidgetService";

const FormAddPlate = () => {
  const [plate, setPlate] = useState("");
  const [place, setPlace] = useState("");
  const [reqMsg, setReqMsg] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setReqMsg("Warten...");
    try {
      let req = await claimParkingPass(plate, place);
      setReqMsg(req.transactionHash);
    } catch (error) {
      setReqMsg(error);
    }
  }

  return (
    <div className="container px-5 py-3 my-2 border rounded-3">
      <h2>Bewohnerparkausweis beantragen</h2>
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
              name="plateInput"
              onChange={(e) => setPlate(e.target.value)}
              required
            />
          </div>
          <p class="col-sm-5">
            <StatusWidget reqMsg={reqMsg} />
          </p>
        </div>
        <div class="row mb-3">
          <label for="placeInput" class="col-sm-2 col-form-label">
            Zone
          </label>
          <div className="col-sm-5 ">
            <select
              class="form-select"
              aria-label="placeInput"
              onChange={(e) => setPlace(e.target.value)}
              required
            >
              <option selected disabled value="">
                Bitte auswählen...
              </option>
              <option value="Waldstraßenviertel">Waldstraßenviertel</option>
              <option value="Innenstadt">Innenstadt</option>
            </select>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Senden
        </button>
      </form>
    </div>
  );
};

export default FormAddPlate;
