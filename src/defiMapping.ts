import { 
  Address, 
  BigInt
} from "@graphprotocol/graph-ts";
import { 
  DefiRound,
  Deposited, 
  Withdrawn, 
  WhitelistConfigured,
  SupportedTokensAdded,
  AssetsFinalized,
  GenesisTransfer,
  TreasuryTransfer,
  RatesPublished
} from "../generated/DefiRound/DefiRound";
import {
  ERC20
} from "../generated/DefiRound/ERC20";
import {
  Pool,
  Contract,
  Balance, 
  Token,
  User,
  WhiteList,
  FinalizedAsset,
  Oracle,
  TransferToTreasury,
  PublishedRates
} from "../generated/schema";

const ZERO_ADDRESS = Address.fromString('0x0000000000000000000000000000000000000000');
const SECONDS_IN_WEEK = 604800;

// Consolidate reused code once functions are complete

export function handleDeposit(event: Deposited): void {
  let tokenId = event.params.tokenInfo.token.toHex();
  let token = Token.load(tokenId);

  let defiContract = DefiRound.bind(event.address);

  if (!token) {
    let genesis = defiContract.getGenesisPools([event.params.tokenInfo.token])[0];
    let oracle = defiContract.getTokenOracles([event.params.tokenInfo.token])[0];
    token = new Token(tokenId);
    let erc20 = ERC20.bind(Address.fromString(tokenId));
    token.name = erc20.name();
    token.symbol = erc20.symbol();
    token.oracle = Oracle.load(oracle.toHex()).id;
    token.pool = Pool.load(genesis.toHex()).id;
    token.total = BigInt.fromI32(0);
  }

  token.total = token.total.plus(event.params.tokenInfo.amount);  

  let contractId = event.address.toHex();
  let contract = Contract.load(contractId);

  contract.depositsOpen = true;
  contract.withdrawalsOpen = false;

  let contractBalanceId = event.address.toHex() + event.params.tokenInfo.token.toHex()
  let contractBalance = Balance.load(contractBalanceId);

  if (!contractBalance) {
    contractBalance = new Balance(contractBalanceId);
    contractBalance.address = event.address;
    contractBalance.token = token.id;
    contractBalance.total = BigInt.fromI32(0);    
    contractBalance.save();
  }

  let contractBalances = contract.balances;    
  if (!contractBalances) {
    contractBalances = [];
  }
  contractBalances.push(contractBalance.id);
  contractBalance.total = contractBalance.total.plus(event.params.tokenInfo.amount);
  contractBalance.save();

  contract.balances = contractBalances;  
  
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
    userBalance.total = BigInt.fromI32(0);
    userBalance.save();
  } 

  userBalance.total = userBalance.total.plus(event.params.tokenInfo.amount);
  userBalance.save();

  let userBalancesArr = user.balances;
  if (!userBalancesArr) {
    userBalancesArr = [];
  }
  userBalancesArr.push(userBalance.id);
  user.balances = userBalancesArr;
    
  user.save();
  token.save();
  contract.save();
}

export function handleWithdraw(event: Withdrawn): void {
  let tokenId = event.params.tokenInfo.token.toHex();
  let token = Token.load(tokenId);

  let defiContract = DefiRound.bind(event.address);

  if (!token) {
    let genesis = defiContract.getGenesisPools([event.params.tokenInfo.token])[0];
    let oracle = defiContract.getTokenOracles([event.params.tokenInfo.token])[0];
    token = new Token(tokenId);
    let erc20 = ERC20.bind(Address.fromString(tokenId));
    token.name = erc20.name();
    token.symbol = erc20.symbol();
    token.oracle = Oracle.load(oracle.toHex()).id;
    token.pool = Pool.load(genesis.toHex()).id;
    token.total = BigInt.fromI32(0);
  }

  token.total = token.total.minus(event.params.tokenInfo.amount);  

  let contractId = event.address.toHex();
  let contract = Contract.load(contractId);

  contract.depositsOpen = false;
  contract.withdrawalsOpen = true;

  let contractBalanceId = event.address.toHex() + event.params.tokenInfo.token.toHex()
  let contractBalance = Balance.load(contractBalanceId);

  if (!contractBalance) {
    contractBalance = new Balance(contractBalanceId);
    contractBalance.address = event.address;
    contractBalance.token = token.id;
    contractBalance.total = BigInt.fromI32(0);  
    contractBalance.save();  
  }

  let contractBalances = contract.balances;    
  if (!contractBalances) {
    contractBalances = [];
  }
  contractBalances.push(contractBalance.id);
  contractBalance.total = contractBalance.total.minus(event.params.tokenInfo.amount);
  contractBalance.save();

  contract.balances = contractBalances;  

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
    userBalance.total = BigInt.fromI32(0);
    userBalance.save();
  } 

  userBalance.total = userBalance.total.minus(event.params.tokenInfo.amount);
  userBalance.save();

  let userBalancesArr = user.balances;
  if (!userBalancesArr) {
    userBalancesArr = [];
  }
  userBalancesArr.push(userBalance.id);
  user.balances = userBalancesArr;
  
  user.save();
  token.save();
  contract.save();
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

export function handleSupportedTokens(event: SupportedTokensAdded): void {

  for (let i = 0; i < event.params.tokenData.length; i++ ) {
    let tokenIdArr = event.params.tokenData;
    let tokenId = tokenIdArr[i].token.toHex();
    let tokenEntity = new Token(tokenId);

    let erc20 = ERC20.bind(Address.fromString(tokenId));
    tokenEntity.name = erc20.name();
    tokenEntity.symbol = erc20.symbol();
    tokenEntity.total = BigInt.fromI32(0);

    let oracleIdArr = event.params.tokenData;
    let oracleId = oracleIdArr[i].oracle.toHexString();
    let oracleEntity = new Oracle(oracleId);

    oracleEntity.token = tokenEntity.id;
    tokenEntity.oracle = oracleEntity.id;

    let poolIdArr = event.params.tokenData;
    let poolId = poolIdArr[i].genesis.toHex();
    let poolEntity = new Pool(poolId);
    poolEntity.depositedToken = tokenEntity.id;
    poolEntity.amountDeposited = BigInt.fromI32(0);
    tokenEntity.pool = poolEntity.id; 

    let contractId = event.address.toHex();
    let contract = new Contract(contractId);

    contract.depositsOpen = true;
    contract.withdrawalsOpen = false;
    contract.privateFarmingOpen = false;
    contract.balances = [];

    contract.save();
    oracleEntity.save();
    tokenEntity.save();
    poolEntity.save();
  }
}

export function handleFinalizedAsset(event: AssetsFinalized): void {
  let finalizedAssetId = event.params.claimer.toHex();
  let finalizedAsset = new FinalizedAsset(finalizedAssetId);
  
  let tokens = finalizedAsset.token;
  if (!tokens) {
    finalizedAsset.token = [];
  }

  tokens.push(event.params.token.toHex());
  finalizedAsset.token = tokens;

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
  let accountData = defiContract.getAccountData(event.params.user);

  let userDepositedToken;
  for (let i = 0; i < accountData.length; i++) {
    if (accountData[i].token != ZERO_ADDRESS) {
      userDepositedToken = accountData[i].token;
    }
  }

  let token = Token.load(userDepositedToken);
  let genesis = token.pool;
  
  let genesisEntity = Pool.load(genesis);
  genesisEntity.amountDeposited = genesisEntity.amountDeposited.plus(event.params.amountTransferred);

  genesisEntity.save();
}

export function handleTreasuryTransfer(event: TreasuryTransfer): void {
  let transferId = event.block.number.toHex();
  let transferEntity = new TransferToTreasury(transferId);

  let defiContract = DefiRound.bind(event.address);
  let balances = transferEntity.balances;
  if (!balances) {
    balances = [];
  }
  
  for (let i = 0; i < event.params.tokens.length ; i++) {
    let tokenArr = event.params.tokens;
    let balanceEntity = new Balance(defiContract.treasury().toHex() + tokenArr[i].token.toHex());
    balanceEntity.address = tokenArr[i].token;
    balanceEntity.token = Token.load(tokenArr[i].token.toHex()).id;
    balanceEntity.total = tokenArr[i].amount;
    balanceEntity.save();
    balances.push(balanceEntity.id);
  }

  transferEntity.balances = balances;
  let contract = Contract.load(event.address.toHex());
  contract.depositsOpen = false;
  contract.withdrawalsOpen = false;
  contract.privateFarmingOpen = true;

  transferEntity.save();
  contract.save();
} 

export function handleRates(event: RatesPublished): void {
  let ratesIdArr = event.params.ratesData;

  for (let i = 0; i < ratesIdArr.length; i++) {
    let token = ratesIdArr[i].token;
    let blockNum = event.block.number;
    let ratesId = token.toHex() + blockNum.toHex();

    let ratesEntity = new PublishedRates(ratesId);
    ratesEntity.token = Token.load(token.toHex()).id;
    ratesEntity.blocknumber = blockNum;
    ratesEntity.numberator = ratesIdArr[i].numerator;
    ratesEntity.denominator = ratesIdArr[i].denominator;

    ratesEntity.save();
  } 

  let contract = Contract.load(event.address.toHex());
  contract.depositsOpen = false;
  contract.withdrawalsOpen = true;
  contract.privateFarmingOpen = false;
  
  contract.save();

}