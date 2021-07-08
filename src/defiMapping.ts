import { log } from '@graphprotocol/graph-ts';
import { 
  Address, 
  BigInt, 
  BigDecimal 
} from "@graphprotocol/graph-ts";
import { 
  DefiRound,
  Deposited, 
  Withdrawn, 
  WhitelistConfigured,
  SupportedTokensAdded,
  AssetsFinalized,
  GenesisTransfer,
  TreasuryTransfer
} from "../generated/DefiRound/DefiRound";
import {
  ERC20
} from "../generated/ERC20/ERC20";
import {
  Pool,
  Contract,
  Balance, 
  Token,
  User,
  WhiteList,
  SupportedTokens,
  FinalizedAsset,
  Oracle,
  TransferToTreasury
} from "../generated/schema";

const SECONDS_IN_WEEK = 604800;

// Consolidate reused code once functions are complete
// CHECK SAVES

export function handleDeposit(event: Deposited): void {
  let tokenId = event.params.tokenInfo.token.toHex();
  let token = Token.load(tokenId);

  let defiContract = DefiRound.bind(event.address);

  if (!token) {
    let genesis = defiContract.getGenesisPools([event.params.tokenInfo.token])[0];
    token = new Token(tokenId);
    let erc20 = ERC20.bind(Address.fromString(tokenId));
    token.name = erc20.name();
    token.symbol = erc20.symbol();
    token.oracle = Oracle.load(event.params.tokenInfo.token.toHex()).id;
    token.pool = Pool.load(genesis.toHex()).id;
  }
  token.total = token.total.plus(event.params.tokenInfo.amount);

  let contractId = event.address.toHex();
  let contract = Contract.load(contractId);

  if(!contract) {
    contract = new Contract(contractId);
    contract.depositsOpen = true;
    contract.withdrawalsOpen = false;
    contract.privateFarmingOpen = false;
  }

  let contractBalanceId = event.address.toHex() + event.params.tokenInfo.token.toHex()
  let contractBalances = contract.balances;
  let contractBalance = Balance.load(contractBalanceId);

  if (!contractBalance) {
    contractBalance = new Balance(contractBalanceId);
    contractBalance.address = event.address;
    contractBalance.token = token.id;
    contractBalances.push(contractBalance.id);
    contract.balances = contractBalances;
  }

  contractBalance.total = contractBalance.total.plus(event.params.tokenInfo.amount);

  let userId = event.params.depositor.toHex();
  let user = User.load(userId);

  if (!user) {
    user = new User(userId);
    user.participant = true;
  }

  let userBalanceId = event.params.depositor.toHex() + event.params.tokenInfo.token.toHex();
  let userBalance = Balance.load(userBalanceId);

  if (!userBalance) {
    userBalance = new Balance(userBalanceId);
    userBalance.address = event.params.depositor;
    userBalance.token = tokenId;
    userBalance.total = userBalance.total.plus(event.params.tokenInfo.amount);

    let userBalancesArr = user.balances;
    userBalancesArr.push(userBalance.id);
    user.balances = userBalancesArr;
  } 

  userBalance.total = userBalance.total.plus(event.params.tokenInfo.amount);

  user.save();
  token.save();
  contract.save();
  userBalance.save();
  contractBalance.save();
}

export function handleWithdraw(event: Withdrawn): void {
  let tokenId = event.params.tokenInfo.token.toHex();
  let token = Token.load(tokenId);

  let defiContract = DefiRound.bind(event.address);

  if (!token) {
    let genesis = defiContract.getGenesisPools([event.params.tokenInfo.token])[0];
    token = new Token(tokenId);
    let erc20 = ERC20.bind(Address.fromString(tokenId));
    token.name = erc20.name();
    token.symbol = erc20.symbol();
    token.oracle = Oracle.load(event.params.tokenInfo.token.toHex()).id;
    token.pool = Pool.load(genesis.toHex()).id;
  }
  token.total = token.total.plus(event.params.tokenInfo.amount);

  let contractId = event.address.toHex();
  let contract = Contract.load(contractId);

  if(!contract) {
    contract = new Contract(contractId);
    contract.depositsOpen = true;
    contract.withdrawalsOpen = false;
    contract.privateFarmingOpen = false;
  }

  let contractBalanceId = event.address.toHex() + event.params.tokenInfo.token.toHex()
  let contractBalances = contract.balances;
  let contractBalance = Balance.load(contractBalanceId);

  if (!contractBalance) {
    contractBalance = new Balance(contractBalanceId);
    contractBalance.address = event.address;
    contractBalance.token = token.id;
    contractBalances.push(contractBalance.id);
    contract.balances = contractBalances;
  }

  contractBalance.total = contractBalance.total.plus(event.params.tokenInfo.amount);

  let userId = event.params.withdrawer.toHex();
  let user = User.load(userId);

  if (!user) {
    user = new User(userId);
    user.participant = true;
  }

  let userBalanceId = event.params.withdrawer.toHex() + event.params.tokenInfo.token.toHex();
  let userBalance = Balance.load(userBalanceId);

  if (!userBalance) {
    userBalance = new Balance(userBalanceId);
    userBalance.address = event.params.withdrawer;
    userBalance.token = tokenId;
    userBalance.total = userBalance.total.plus(event.params.tokenInfo.amount);

    let userBalancesArr = user.balances;
    userBalancesArr.push(userBalance.id);
    user.balances = userBalancesArr;
  } 

  userBalance.total = userBalance.total.minus(event.params.tokenInfo.amount);

  user.save();
  token.save();
  contract.save();
  userBalance.save();
  contractBalance.save();
}  

export function handleWhitelist(event: WhitelistConfigured): void {
  let whitelistId = event.address.toHex();
  let whitelist = WhiteList.load(whitelistId);

  if (!whitelist) {
    whitelist = new WhiteList(whitelistId);
  }

  whitelist.root = event.params.settings.root;
  whitelist.enabled = event.params.settings.enabled; 
  whitelist.save();
}

// indexOf
export function handleSupportedTokens(event: SupportedTokensAdded): void {

  for (let i = 0; i < event.params.tokenData.length; i++ ) {
    let supportedTokenIdArr = event.params.tokenData;
    let supportedTokenId = supportedTokenIdArr[i].token.toHex();
    let supportedTokenEntity = new SupportedTokens(supportedTokenId);

    let tokenIdArr = event.params.tokenData;
    let tokenId = tokenIdArr[i].token.toHex();
    let tokenEntity = new Token(tokenId);

    let erc20 = ERC20.bind(Address.fromString(tokenId));
    tokenEntity.name = erc20.name();
    tokenEntity.symbol = erc20.symbol();
    tokenEntity.total = BigInt.fromI32(0);

    let oracleIdArr = event.params.tokenData;
    let oracleId = oracleIdArr[i].token.toHexString();
    let oracleEntity = new Oracle(oracleId);

    supportedTokenEntity.token = tokenEntity.id;
    oracleEntity.oracleAddr = oracleIdArr[i].oracle;
    tokenEntity.oracle = oracleEntity.id;

    let poolIdArr = event.params.tokenData;
    let poolId = poolIdArr[i].genesis.toHex();
    let poolEntity = new Pool(poolId);
    poolEntity.depositedToken = tokenEntity.id;
    poolEntity.amountDeposited = BigInt.fromI32(0);
    tokenEntity.pool = poolEntity.id; 

    supportedTokenEntity.save();
    oracleEntity.save();
    tokenEntity.save();
    poolEntity.save();
  }
}

export function handleFinalizedAsset(event: AssetsFinalized): void {
  let finalizedAssetId = event.params.claimer.toHex();
  let finalizedAsset = new FinalizedAsset(finalizedAssetId);
  
  let tokens = finalizedAsset.token;
  tokens.push(event.params.token.toHex());
  finalizedAsset.token = tokens;

  finalizedAsset.amount = event.params.assetsMoved;

  let contractId = event.address.toHex();
  let defiContract = DefiRound.bind(Address.fromString(contractId));
  let contract = Contract.load(contractId)
  if (event.block.timestamp > defiContract.lastLookExpiration()
    .plus(BigInt.fromI32(2 * SECONDS_IN_WEEK))) 
  {
    contract.depositsOpen = false;
    contract.withdrawalsOpen = false;
    contract.privateFarmingOpen = false;
  }

  finalizedAsset.save();
  contract.save();
}

export function handleGenesisTransfer(event: GenesisTransfer): void {
  let finalizedAssetId = event.params.user.toHex();
  let finalizedAssetEntity = new FinalizedAsset(finalizedAssetId);

  finalizedAssetEntity.privateFarming = true;
  finalizedAssetEntity.save();

  let defiContract = DefiRound.bind(event.address);
  // This
  let genesisArr = defiContract.getGenesisPools([]);
  let genesis = genesisArr[0];
  let genesisEntity = Pool.load(genesis.toHex());
  genesisEntity.amountDeposited = genesisEntity.amountDeposited.plus(event.params.amountTransferred);
}

export function handleTreasuryTransfer(event: TreasuryTransfer): void {
  let transferId = event.block.number.toHex();
  let transferEntity = new TransferToTreasury(transferId);

  let defiContract = DefiRound.bind(event.address);
  for (let i = 0; i < event.params.tokens.length ; i++) {
    let tokenArr = event.params.tokens;
    let balances = transferEntity.balances;
    let balanceEntity = new Balance(defiContract.treasury().toHex() + tokenArr[i].token.toHex());
    balanceEntity.address = tokenArr[i].token;
    balanceEntity.token = Token.load(tokenArr[i].token.toHex()).id;
    balanceEntity.total = balanceEntity.total.plus(tokenArr[i].amount);
    balances.push(balanceEntity.id);
  }

  let contract = Contract.load(event.address.toHex());
  contract.depositsOpen = false;
  contract.withdrawalsOpen = false;
  contract.privateFarmingOpen = true;

  transferEntity.save();
  contract.save();
} 