import { form_address } from "./WalletService";

export function StatusWidget({ reqMsg }) {
  if (String(reqMsg).startsWith("0x")) {
    var formed_address = form_address(reqMsg);
    var etherscan_link = "https://goerli.etherscan.io/tx/" + reqMsg;
    return (
      <div>
        Transaktion erfolgreich! Txid:{" "}
        <a href={etherscan_link} target="_blank" rel="noopener noreferrer">
          {formed_address}
        </a>
      </div>
    );
  } else if (reqMsg.code === 4001) {
    return <div>Transaktion in MetaMask durch Benutzer abgelehnt!</div>;
  } else if (reqMsg.message) {
    return <div>{reqMsg.message}</div>;
  } else {
    return <div>{reqMsg}</div>;
  }
}
