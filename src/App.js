import React, { useState, useEffect } from "react";
import init_wallet from './util/WalletService'
import FormCheckPlate from './components/formCheckPlate'
import FormAddPass from "./components/formAddPlate";
import FormRenewPlate from "./components/formRenewPlate";
import FormConfirmPlate from "./components/formConfirmPlate";
import FormAddVisitorPass from "./components/formAddVisitorPass";

function App() {
  const [connectedAccount, setConnectedAccount] = useState(null)
  useEffect(() => {
    async function fetchData() {
      setConnectedAccount(await init_wallet())
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Parking Solutions</h1>
      <p>Connected Wallet: {connectedAccount}</p>
      <FormAddPass/>
      <FormAddVisitorPass/>
      <FormConfirmPlate/>
      <FormRenewPlate/>
      <FormCheckPlate/>
    </div>
  )
}

export default App;
