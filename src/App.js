import React, { useState, useEffect } from "react";
import init_wallet from './util/WalletService'
import FormCheckPlate from './components/formCheckPlate'
import FormAddPass from "./components/formAddPlate";
import FormRenewPlate from "./components/formRenewPlate";
import FormConfirmPlate from "./components/formConfirmPlate";
import FormAddVisitorPass from "./components/formAddVisitorPass";

function App() {
  const [connectedAccount, setConnectedAccount] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchData() {
      setConnectedAccount(await init_wallet())
      setLoading(false)
    }
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>
  return (
    <div>
      <h1>Parking Solutions</h1>
      <p>Connected Account: {connectedAccount}</p>
      <FormAddPass/>
      <FormAddVisitorPass/>
      <FormConfirmPlate/>
      <FormRenewPlate/>
      <FormCheckPlate/>
    </div>
  )
}

export default App;
