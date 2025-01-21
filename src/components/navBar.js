import React from "react";
import { NavLink } from "react-router-dom";
import init_wallet, { form_address } from "./util/WalletService";

export default function NavBar({ connectedAccount, balance }) {
  return (
    <nav className="navbar nav nav-pills bg-light">
      <a className="navbar-brand px-2" href="/">
        <img
          src="/Logo-Leipzig.png"
          height="50"
          className="d-inline-block align-middle px-3"
          alt=""
        />
        <img
          src="/ParkingSolutions-logo.png"
          height="50"
          className="d-inline-block align-middle px-3"
          alt=""
        />
        Parking Solutions
      </a>
      <div className="row">
        <NavLink
          exact
          className="nav-item nav-link col"
          activeclassname="nav-link active"
          to="/"
        >
          Bewohnerpanel
        </NavLink>
        <NavLink
          exact
          className="nav-item nav-link col"
          activeclassname="nav-link active"
          to="/worker"
        >
          Beamtenpanel
        </NavLink>
        <NavLink
          exact
          className="nav-item nav-link col"
          activeclassname="nav-link active"
          to="/admin"
        >
          Adminpanel
        </NavLink>
      </div>
      <span className="navbar-text align-middle px-3">
        <WalletWidget account={connectedAccount} balance={balance} />
      </span>
    </nav>
  );
}

function WalletWidget({ account, balance }) {
  if (!account && window.ethereum) {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          value="Connect Wallet"
          onClick={init_wallet}
        >
          Wallet verbinden
        </button>
      </div>
    );
  } else if (!account) {
    return <p>MetaMask nicht erkannt!</p>;
  }

  var formed_address = form_address(account);
  var etherscan_link = "https://goerli.etherscan.io/address/" + account;
  var formed_balance = String(balance).substring(0, 5);
  return (
    <div className="text-right">
      Wallet:{" "}
      <a href={etherscan_link} target="_blank" rel="noopener noreferrer">
        {formed_address}
      </a>
      <br></br>Guthaben: {formed_balance} GOR
    </div>
  );
}
