import React, { useState, useEffect } from "react";
import init_wallet, { get_walletbalance } from "./util/WalletService";
import FormCheckPlate from "./components/formCheckPlate";
import FormAddPass from "./components/formAddPlate";
import FormRenewPlate from "./components/formRenewPlate";
import FormConfirmPlate from "./components/formConfirmPlate";
import FormAddVisitorPass from "./components/formAddVisitorPass";
import NavBar from "./components/navBar";
import FormAddConfirmer from "./components/formAddConfirmer";
import FormAddWorker from "./components/formAddWorker";

function App() {
  const [connectedAccount, setConnectedAccount] = useState("");
  const [walletBalance, setWalletBalance] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const cur_wallet = await init_wallet();
      setConnectedAccount(cur_wallet);
      setWalletBalance(await get_walletbalance(cur_wallet));
    }
    fetchData();
  }, []);

  if (window.ethereum) {
    window.ethereum.on("accountsChanged", function (accounts) {
      async function fetchData() {
        const cur_wallet = await init_wallet();
        setConnectedAccount(cur_wallet);
        setWalletBalance(await get_walletbalance(cur_wallet));
      }
      fetchData();
    });
  }

  return (
    <div>
      <NavBar connectedAccount={connectedAccount} balance={walletBalance} />
      <div className="container">
        <h1 class="text-center py-2">Benutzer Panel</h1>
        <FormAddPass />
        <FormAddVisitorPass />
        <FormRenewPlate />

        <h1 class="text-center py-2">Admin Panel</h1>
        <FormConfirmPlate />
        <FormCheckPlate />
        <FormAddConfirmer />
        <FormAddWorker />
        <p class="text-center py-2">© ParkingSolutions 2023</p>
      </div>
    </div>
  );
}

export default App;
