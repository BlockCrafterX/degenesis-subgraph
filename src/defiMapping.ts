import { Address } from "@graphprotocol/graph-ts";
import { 
  AddSupportedTokensCall,
  Deposited, 
  Withdrawn
} from "../generated/DefiRound/DefiRound";
import {
  ERC20
} from "../generated/ERC20/ERC20";
import {
  Contract,
  Balance, 
  Token,
  User
} from "../generated/schema";

// Consolidate reused code once functions are complete

// Can handle update User, Contract, Balance entities
// Probably need to use ERC20 here to get name and symbol of Token
export function handleDeposit(event: Deposited): void {
  let tokenId = event.params.tokenInfo.token.toHex();
  let token = Token.load(tokenId);

  if (token == null) {
    token = new Token(tokenId);
  }

  let erc20 = ERC20.bind(Address.fromString(tokenId));
  token.name = erc20.name();
  token.symbol = erc20.symbol();
  // Oracle
  // Pool
  token.total = token.total.plus(event.params.tokenInfo.amount);
  // totalUSD
  token.save();

  let contractId = event.address.toHex();
  let contract = Contract.load(contractId);

  if(contract == null) {
    contract = new Contract(contractId);
  }

  //totalUSD
  //Once defi finalized
    //depoistsOpen
    //withDrawalsOpen
    //privateFarmingOpen
  //balances

  let balanceId = event.params.depositor.toHex();
  let balance = Balance.load(balanceId);

  if (balance == null) {
    balance = new Balance(balanceId);
  }

  balance.address = event.params.depositor;
  // token
  balance.total = balance.total.plus(event.params.tokenInfo.amount);
  // totalUSD

  let userId = event.params.depositor.toHex();
  let user = User.load(userId);

  if (user == null) {
    user = new User(userId)
  }

  // totalUSD
  user.participant = true;
  // balances
}



// Can handle update User, Contract, Balance entities
export function handleWithdraw(event: Withdrawn): void {
  let tokenId = event.params.tokenInfo.token.toHex();
  let token = Token.load(tokenId)

  if (token == null) {
    token = new Token(tokenId);
  }

  let erc20 = ERC20.bind(Address.fromString(tokenId));
  token.name = erc20.name();
  token.symbol = erc20.symbol();
  // Oracle
  // Pool
  token.total = token.total.minus(event.params.tokenInfo.amount);
  //totalUSD
  token.save();

  let contractId = event.address.toHex();
  let contract = Contract.load(contractId);

  if(contract == null) {
    contract = new Contract(contractId);
  }

  //totalUSD
  //Once defi finalized
    //depoistsOpen
    //withDrawalsOpen
    //privateFarmingOpen
  //balances

  let balanceId = event.params.withdrawer.toHex();
  let balance = Balance.load(balanceId);

  if (balance == null) {
    balance = new Balance(balanceId);
  }

  balance.address = event.params.withdrawer;
  // token
  balance.total = balance.total.plus(event.params.tokenInfo.amount);
  // totalUSD

  let userId = event.params.withdrawer.toHex();
  let user = User.load(userId);

  if (user == null) {
    user = new User(userId)
  }

  // totalUSD
  user.participant = true;
  // balances
}  

// Example of using call vs event, don't actually need
export function randomFunc(call: AddSupportedTokensCall): void {

}

// export function handleContract(): void {
//   let contract = new Contract();
//   contract.save();
// }
