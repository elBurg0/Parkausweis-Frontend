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
      <p>Hier kann ein Bewohnerparkasuweis für ein Jahr beantragt werden. Pro Wallet ist nur ein Antrag möglich.</p>
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
              name="plateInput"
              pattern="([a-zA-Z]{1,3})-([a-zA-Z]{1,2})-\d{1,4}[HE]?"
              title="A{AA}-A{A}-9{999}{H|E}"
              onChange={(e) => setPlate(e.target.value)}
              required
            />
          </div>
          <div className="col-sm-5">
            <StatusWidget reqMsg={reqMsg} />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="placeInput" className="col-sm-2 col-form-label">
            Zone
          </label>
          <div className="col-sm-5 ">
            <select
              className="form-select"
              aria-label="placeInput"
              onChange={(e) => setPlace(e.target.value)}
              defaultValue="Waldstraßenviertel"
              required
            >
              <option value="Waldstraßenviertel">Waldstraßenviertel</option>
              <option value="Innenstadt">Innenstadt</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Senden
        </button>
      </form>
    </div>
  );
};

export default FormAddPlate;
