import React from "react";
import init_wallet, { form_address } from "../util/WalletService";

export default function NavBar({ connectedAccount, balance }) {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand px-2">
        <img
          src="/Logo-Leipzig.png"
          height="50"
          class="d-inline-block align-middle px-3"
          alt=""
        />
        <img
          src="/ParkingSolutions-logo.png"
          height="50"
          class="d-inline-block align-middle px-3"
          alt=""
        />
        Parking Solutions
      </a>
      <span class="navbar-text align-middle px-3">
        <WalletWidget account={connectedAccount} balance={balance} />
      </span>
    </nav>
  );
}

function WalletWidget({ account, balance }) {
  if (account === "no_metamask") {
    return <p>MetaMask nicht erkannt!</p>;
  } else if (account !== "") {
    var formed_address = form_address(account);
    var etherscan_link = "https://goerli.etherscan.io/address/" + account;
    var formed_balance = String(balance).substring(0, 5);
    return (
      <div className="text-right">
        Wallet: <a href={etherscan_link} target="_blank" rel="noopener noreferrer">{formed_address}</a>
        <br></br>Guthaben: {formed_balance} GOR
      </div>
    );
  } else {
    return (
      <div>
        <button
          type="button"
          class="btn btn-primary btn-sm"
          value="Connect Wallet"
          onClick={init_wallet}
        >
          Wallet verbinden
        </button>
      </div>
    );
  }
}
