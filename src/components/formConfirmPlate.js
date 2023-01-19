import React, { useState, useEffect} from "react";
import { getRequests } from "../util/ContractService";
import RequestList from "./requestListComponent";

const FormConfirmPass = () => {
  const [requests, setRequests] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        let req = await getRequests();
        setRequests(req);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container px-5 py-3 my-2 border rounded-3">
      <h2>Bewohnerparkausweis-Anfragen bearbeiten </h2>
      <p>Hier kann ein Antrag auf einen Bewohnerausweis mit dem Nummernschild bestätigt oder abgelehnt werden.</p>
      <RequestList requests={requests}/>
    </div>
  );
};

export default FormConfirmPass;
