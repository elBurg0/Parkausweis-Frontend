import Web3 from "web3";

export default async function init_wallet() {
  if (window.ethereum) {
    // For initial startup
    try {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.requestAccounts();
      const account = accounts[0];
      return account;
    } catch (error) {
      return "";
    }
  } else {
    return "no_metamask";
  }
}

export async function get_walletbalance(walletAddress) {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    var balance = await web3.eth.getBalance(walletAddress); //Will give value in.
    balance = "0." + balance;
    return balance;
  } else {
    return 0;
  }
}

export function form_address(address) {
  var strFirst = address.substring(0, 4);
  var strLast = address.substring(address.length - 3);
  return strFirst + "..." + strLast;
}
