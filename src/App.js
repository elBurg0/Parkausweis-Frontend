import React, { useState, useEffect } from "react";
import init_wallet, { get_walletbalance } from './util/WalletService'
import FormCheckPlate from './components/formCheckPlate'
import FormAddPass from "./components/formAddPlate";
import FormRenewPlate from "./components/formRenewPlate";
import FormConfirmPlate from "./components/formConfirmPlate";
import FormAddVisitorPass from "./components/formAddVisitorPass";


function App() {
  const [connectedAccount, setConnectedAccount] = useState(null)
  const [walletBalance, setWalletBalance] = useState(null)


  useEffect(() => {
    async function fetchData() {
      const cur_wallet = await init_wallet()
      setConnectedAccount(cur_wallet)
      setWalletBalance(await get_walletbalance(cur_wallet))
    }
    fetchData();
  }, []);

  window.ethereum.on('accountsChanged', function (accounts) {
    async function fetchData() {
      const cur_wallet = await init_wallet()
      setConnectedAccount(cur_wallet)
      setWalletBalance(await get_walletbalance(cur_wallet))
    }
    fetchData();
  })

  return (
    <div>
      <h1>Parking Solutions</h1>
      <p>Connected Wallet: {connectedAccount}   -  Balance: {walletBalance}</p>
      <FormAddPass/>
      <FormAddVisitorPass/>
      <FormConfirmPlate/>
      <FormRenewPlate/>
      <FormCheckPlate/>
    </div>
  )
}

export default App;
