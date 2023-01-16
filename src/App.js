import React, { useState, useEffect } from "react";
import init_wallet, { get_walletbalance } from "./util/WalletService";
import FormCheckPlate from "./components/formCheckPlate";
import FormAddPass from "./components/formAddPlate";
import FormRenewPlate from "./components/formRenewPlate";
import FormConfirmPlate from "./components/formConfirmPlate";
import FormAddVisitorPass from "./components/formAddVisitorPass";
import NavBar from "./components/navBar";

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
      <FormAddPass />
      <FormAddVisitorPass />
      <FormConfirmPlate />
      <FormRenewPlate />
      <FormCheckPlate />
    </div>
  );
}

export default App;
