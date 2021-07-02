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
  Token
} from "../generated/schema";

// Can handle update User, Contract, Balance entities
// Probably need to use ERC20 here to get name and symbol of Token
export function handleDeposit(event: Deposited): void {
  let id = event.params.tokenInfo.token.toHex();
  let token = Token.load(id);

  if (token == null) {
    token = new Token(id);
  }

  let erc20 = ERC20.bind(Address.fromString(id));
  token.name = erc20.name();
  token.symbol = erc20.symbol();
  // Oracle
  // Pool
  token.total = token.total.plus(event.params.tokenInfo.amount);

}

// Can handle update User, Contract, Balance entities
export function handleWithdraw(event: Withdrawn): void {
  let id = event.params.tokenInfo.token.toHex();
  let token = Token.load(id)

  if (token == null) {
    // token = new Token();
  }

  let erc20 = ERC20.bind(Address.fromString(id));
  token.name = erc20.name();
  token.symbol = erc20.symbol();
  // Oracle
  // Pool
  token.total = token.total.minus(event.params.tokenInfo.amount);

}

// Example of using call vs event, don't actually need
export function randomFunc(call: AddSupportedTokensCall): void {

}

// export function handleContract(): void {
//   let contract = new Contract();
//   contract.save();
// }
