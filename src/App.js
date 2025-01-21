import React, { useEffect, useState } from "react";
import NavBar from "./components/navBar";
import init_wallet, {
  get_walletbalance,
} from "./components/util/WalletService";

import { Route, Routes } from "react-router-dom";
import AdminComponent from "./components/AdminComponent";
import UserComponent from "./components/UserComponent";
import WorkerComponent from "./components/WorkerComponent";

function App() {
  const [connectedAccount, setConnectedAccount] = useState(null);
  const [walletBalance, setWalletBalance] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const cur_wallet = await init_wallet();
      if (!cur_wallet) {
        return;
      }
      setConnectedAccount(cur_wallet);
      setWalletBalance(await get_walletbalance(cur_wallet));
    }
    fetchData();
  }, []);

  if (window.ethereum) {
    window.ethereum.on("accountsChanged", function (accounts) {
      async function fetchData() {
        const cur_wallet = await init_wallet();
        if (!cur_wallet) {
          return;
        }
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
        <Routes>
          <Route path="/" element={<UserComponent />} />
          <Route path="/admin" element={<AdminComponent />} />
          <Route path="/worker" element={<WorkerComponent />} />
        </Routes>
        <p className="text-center py-2">© ParkingSolutions 2023</p>
      </div>
    </div>
  );
}

export default App;
