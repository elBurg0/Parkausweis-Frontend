import React from "react";
import init_wallet, { form_address } from "../util/WalletService";

export default function NavBar({ connectedAccount, balance }) {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand px-2">
        <img
          src="/Logo-Leipzig.jpg"
          height="30"
          class="d-inline-block align-top px-2"
          alt=""
        />
        Parking Solutions
      </a>
      <span class="navbar-text px-2">
        <WalletWidget account={connectedAccount} balance={balance} />
      </span>
    </nav>
  );
}

function WalletWidget({ account, balance }) {
  console.log(account, balance);
  if (account === "no_metamask") {
    return <td class="align-middle">MetaMask nicht erkannt!</td>;
  } else if (account !== "") {
    var formed_address = form_address(account);
    var etherscan_link = "https://goerli.etherscan.io/address/" + account;
    var formed_balance = String(balance).substring(0, 5);
    return (
      <div className="text-right">
        Wallet: <a href={etherscan_link}>{formed_address}</a>
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
