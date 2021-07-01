// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AssetsFinalized extends ethereum.Event {
  get params(): AssetsFinalized__Params {
    return new AssetsFinalized__Params(this);
  }
}

export class AssetsFinalized__Params {
  _event: AssetsFinalized;

  constructor(event: AssetsFinalized) {
    this._event = event;
  }

  get claimer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get assetsMoved(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Claimed extends ethereum.Event {
  get params(): Claimed__Params {
    return new Claimed__Params(this);
  }
}

export class Claimed__Params {
  _event: Claimed;

  constructor(event: Claimed) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get claimedAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Deposited extends ethereum.Event {
  get params(): Deposited__Params {
    return new Deposited__Params(this);
  }
}

export class Deposited__Params {
  _event: Deposited;

  constructor(event: Deposited) {
    this._event = event;
  }

  get depositor(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenInfo(): DepositedTokenInfoStruct {
    return this._event.parameters[1].value.toTuple() as DepositedTokenInfoStruct;
  }
}

export class DepositedTokenInfoStruct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
  }
}

export class GenesisTransfer extends ethereum.Event {
  get params(): GenesisTransfer__Params {
    return new GenesisTransfer__Params(this);
  }
}

export class GenesisTransfer__Params {
  _event: GenesisTransfer;

  constructor(event: GenesisTransfer) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amountTransferred(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RatesPublished extends ethereum.Event {
  get params(): RatesPublished__Params {
    return new RatesPublished__Params(this);
  }
}

export class RatesPublished__Params {
  _event: RatesPublished;

  constructor(event: RatesPublished) {
    this._event = event;
  }

  get ratesData(): Array<RatesPublishedRatesDataStruct> {
    return this._event.parameters[0].value.toTupleArray<
      RatesPublishedRatesDataStruct
    >();
  }
}

export class RatesPublishedRatesDataStruct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get numerator(): BigInt {
    return this[1].toBigInt();
  }

  get denominator(): BigInt {
    return this[2].toBigInt();
  }
}

export class SupportedTokensAdded extends ethereum.Event {
  get params(): SupportedTokensAdded__Params {
    return new SupportedTokensAdded__Params(this);
  }
}

export class SupportedTokensAdded__Params {
  _event: SupportedTokensAdded;

  constructor(event: SupportedTokensAdded) {
    this._event = event;
  }

  get tokenData(): Array<SupportedTokensAddedTokenDataStruct> {
    return this._event.parameters[0].value.toTupleArray<
      SupportedTokensAddedTokenDataStruct
    >();
  }
}

export class SupportedTokensAddedTokenDataStruct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get oracle(): Address {
    return this[1].toAddress();
  }

  get genesis(): Address {
    return this[2].toAddress();
  }

  get maxLimit(): BigInt {
    return this[3].toBigInt();
  }
}

export class TransferredToPool extends ethereum.Event {
  get params(): TransferredToPool__Params {
    return new TransferredToPool__Params(this);
  }
}

export class TransferredToPool__Params {
  _event: TransferredToPool;

  constructor(event: TransferredToPool) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TreasuryTransfer extends ethereum.Event {
  get params(): TreasuryTransfer__Params {
    return new TreasuryTransfer__Params(this);
  }
}

export class TreasuryTransfer__Params {
  _event: TreasuryTransfer;

  constructor(event: TreasuryTransfer) {
    this._event = event;
  }
}

export class WhitelistConfigured extends ethereum.Event {
  get params(): WhitelistConfigured__Params {
    return new WhitelistConfigured__Params(this);
  }
}

export class WhitelistConfigured__Params {
  _event: WhitelistConfigured;

  constructor(event: WhitelistConfigured) {
    this._event = event;
  }

  get settings(): WhitelistConfiguredSettingsStruct {
    return this._event.parameters[0].value.toTuple() as WhitelistConfiguredSettingsStruct;
  }
}

export class WhitelistConfiguredSettingsStruct extends ethereum.Tuple {
  get enabled(): boolean {
    return this[0].toBoolean();
  }

  get root(): Bytes {
    return this[1].toBytes();
  }
}

export class Withdrawn extends ethereum.Event {
  get params(): Withdrawn__Params {
    return new Withdrawn__Params(this);
  }
}

export class Withdrawn__Params {
  _event: Withdrawn;

  constructor(event: Withdrawn) {
    this._event = event;
  }

  get withdrawer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenInfo(): WithdrawnTokenInfoStruct {
    return this._event.parameters[1].value.toTuple() as WithdrawnTokenInfoStruct;
  }

  get asETH(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class WithdrawnTokenInfoStruct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
  }
}

export class DefiRound__getAccountDataResultDataStruct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get initialDeposit(): BigInt {
    return this[1].toBigInt();
  }

  get currentBalance(): BigInt {
    return this[2].toBigInt();
  }

  get effectiveAmt(): BigInt {
    return this[3].toBigInt();
  }

  get ineffectiveAmt(): BigInt {
    return this[4].toBigInt();
  }

  get actualTokeReceived(): BigInt {
    return this[5].toBigInt();
  }
}

export class DefiRound__getRateAdjustedAmountsResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class DefiRound__getRatesResultRatesStruct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get numerator(): BigInt {
    return this[1].toBigInt();
  }

  get denominator(): BigInt {
    return this[2].toBigInt();
  }
}

export class DefiRound__overSubscriptionRateResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class DefiRound__whitelistSettingsResult {
  value0: boolean;
  value1: Bytes;

  constructor(value0: boolean, value1: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromFixedBytes(this.value1));
    return map;
  }
}

export class DefiRound extends ethereum.SmartContract {
  static bind(address: Address): DefiRound {
    return new DefiRound("DefiRound", address);
  }

  WETH(): Address {
    let result = super.call("WETH", "WETH():(address)", []);

    return result[0].toAddress();
  }

  try_WETH(): ethereum.CallResult<Address> {
    let result = super.tryCall("WETH", "WETH():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  accountBalance(account: Address): BigInt {
    let result = super.call(
      "accountBalance",
      "accountBalance(address):(uint256)",
      [ethereum.Value.fromAddress(account)]
    );

    return result[0].toBigInt();
  }

  try_accountBalance(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "accountBalance",
      "accountBalance(address):(uint256)",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  currentStage(): i32 {
    let result = super.call("currentStage", "currentStage():(uint8)", []);

    return result[0].toI32();
  }

  try_currentStage(): ethereum.CallResult<i32> {
    let result = super.tryCall("currentStage", "currentStage():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getAccountData(
    account: Address
  ): Array<DefiRound__getAccountDataResultDataStruct> {
    let result = super.call(
      "getAccountData",
      "getAccountData(address):((address,uint256,uint256,uint256,uint256,uint256)[])",
      [ethereum.Value.fromAddress(account)]
    );

    return result[0].toTupleArray<DefiRound__getAccountDataResultDataStruct>();
  }

  try_getAccountData(
    account: Address
  ): ethereum.CallResult<Array<DefiRound__getAccountDataResultDataStruct>> {
    let result = super.tryCall(
      "getAccountData",
      "getAccountData(address):((address,uint256,uint256,uint256,uint256,uint256)[])",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<DefiRound__getAccountDataResultDataStruct>()
    );
  }

  getGenesisPools(tokens: Array<Address>): Array<Address> {
    let result = super.call(
      "getGenesisPools",
      "getGenesisPools(address[]):(address[])",
      [ethereum.Value.fromAddressArray(tokens)]
    );

    return result[0].toAddressArray();
  }

  try_getGenesisPools(
    tokens: Array<Address>
  ): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getGenesisPools",
      "getGenesisPools(address[]):(address[])",
      [ethereum.Value.fromAddressArray(tokens)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getMaxTotalValue(): BigInt {
    let result = super.call(
      "getMaxTotalValue",
      "getMaxTotalValue():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getMaxTotalValue(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getMaxTotalValue",
      "getMaxTotalValue():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRateAdjustedAmounts(
    balance: BigInt,
    token: Address
  ): DefiRound__getRateAdjustedAmountsResult {
    let result = super.call(
      "getRateAdjustedAmounts",
      "getRateAdjustedAmounts(uint256,address):(uint256,uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(balance),
        ethereum.Value.fromAddress(token)
      ]
    );

    return new DefiRound__getRateAdjustedAmountsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_getRateAdjustedAmounts(
    balance: BigInt,
    token: Address
  ): ethereum.CallResult<DefiRound__getRateAdjustedAmountsResult> {
    let result = super.tryCall(
      "getRateAdjustedAmounts",
      "getRateAdjustedAmounts(uint256,address):(uint256,uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(balance),
        ethereum.Value.fromAddress(token)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DefiRound__getRateAdjustedAmountsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  getRates(
    tokens: Array<Address>
  ): Array<DefiRound__getRatesResultRatesStruct> {
    let result = super.call(
      "getRates",
      "getRates(address[]):((address,uint256,uint256)[])",
      [ethereum.Value.fromAddressArray(tokens)]
    );

    return result[0].toTupleArray<DefiRound__getRatesResultRatesStruct>();
  }

  try_getRates(
    tokens: Array<Address>
  ): ethereum.CallResult<Array<DefiRound__getRatesResultRatesStruct>> {
    let result = super.tryCall(
      "getRates",
      "getRates(address[]):((address,uint256,uint256)[])",
      [ethereum.Value.fromAddressArray(tokens)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<DefiRound__getRatesResultRatesStruct>()
    );
  }

  getSupportedTokens(): Array<Address> {
    let result = super.call(
      "getSupportedTokens",
      "getSupportedTokens():(address[])",
      []
    );

    return result[0].toAddressArray();
  }

  try_getSupportedTokens(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getSupportedTokens",
      "getSupportedTokens():(address[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getTokenOracles(tokens: Array<Address>): Array<Address> {
    let result = super.call(
      "getTokenOracles",
      "getTokenOracles(address[]):(address[])",
      [ethereum.Value.fromAddressArray(tokens)]
    );

    return result[0].toAddressArray();
  }

  try_getTokenOracles(
    tokens: Array<Address>
  ): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getTokenOracles",
      "getTokenOracles(address[]):(address[])",
      [ethereum.Value.fromAddressArray(tokens)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  lastLookExpiration(): BigInt {
    let result = super.call(
      "lastLookExpiration",
      "lastLookExpiration():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_lastLookExpiration(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastLookExpiration",
      "lastLookExpiration():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  overSubscriptionRate(): DefiRound__overSubscriptionRateResult {
    let result = super.call(
      "overSubscriptionRate",
      "overSubscriptionRate():(uint256,uint256)",
      []
    );

    return new DefiRound__overSubscriptionRateResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_overSubscriptionRate(): ethereum.CallResult<
    DefiRound__overSubscriptionRateResult
  > {
    let result = super.tryCall(
      "overSubscriptionRate",
      "overSubscriptionRate():(uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DefiRound__overSubscriptionRateResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  totalSupply(param0: Address): BigInt {
    let result = super.call("totalSupply", "totalSupply(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_totalSupply(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalSupply",
      "totalSupply(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalValue(): BigInt {
    let result = super.call("totalValue", "totalValue():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalValue(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalValue", "totalValue():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  treasury(): Address {
    let result = super.call("treasury", "treasury():(address)", []);

    return result[0].toAddress();
  }

  try_treasury(): ethereum.CallResult<Address> {
    let result = super.tryCall("treasury", "treasury():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  whitelistSettings(): DefiRound__whitelistSettingsResult {
    let result = super.call(
      "whitelistSettings",
      "whitelistSettings():(bool,bytes32)",
      []
    );

    return new DefiRound__whitelistSettingsResult(
      result[0].toBoolean(),
      result[1].toBytes()
    );
  }

  try_whitelistSettings(): ethereum.CallResult<
    DefiRound__whitelistSettingsResult
  > {
    let result = super.tryCall(
      "whitelistSettings",
      "whitelistSettings():(bool,bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DefiRound__whitelistSettingsResult(
        value[0].toBoolean(),
        value[1].toBytes()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _WETH(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _treasury(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _maxTotalValue(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddSupportedTokensCall extends ethereum.Call {
  get inputs(): AddSupportedTokensCall__Inputs {
    return new AddSupportedTokensCall__Inputs(this);
  }

  get outputs(): AddSupportedTokensCall__Outputs {
    return new AddSupportedTokensCall__Outputs(this);
  }
}

export class AddSupportedTokensCall__Inputs {
  _call: AddSupportedTokensCall;

  constructor(call: AddSupportedTokensCall) {
    this._call = call;
  }

  get tokensToSupport(): Array<AddSupportedTokensCallTokensToSupportStruct> {
    return this._call.inputValues[0].value.toTupleArray<
      AddSupportedTokensCallTokensToSupportStruct
    >();
  }
}

export class AddSupportedTokensCall__Outputs {
  _call: AddSupportedTokensCall;

  constructor(call: AddSupportedTokensCall) {
    this._call = call;
  }
}

export class AddSupportedTokensCallTokensToSupportStruct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get oracle(): Address {
    return this[1].toAddress();
  }

  get genesis(): Address {
    return this[2].toAddress();
  }

  get maxLimit(): BigInt {
    return this[3].toBigInt();
  }
}

export class ConfigureWhitelistCall extends ethereum.Call {
  get inputs(): ConfigureWhitelistCall__Inputs {
    return new ConfigureWhitelistCall__Inputs(this);
  }

  get outputs(): ConfigureWhitelistCall__Outputs {
    return new ConfigureWhitelistCall__Outputs(this);
  }
}

export class ConfigureWhitelistCall__Inputs {
  _call: ConfigureWhitelistCall;

  constructor(call: ConfigureWhitelistCall) {
    this._call = call;
  }

  get settings(): ConfigureWhitelistCallSettingsStruct {
    return this._call.inputValues[0].value.toTuple() as ConfigureWhitelistCallSettingsStruct;
  }
}

export class ConfigureWhitelistCall__Outputs {
  _call: ConfigureWhitelistCall;

  constructor(call: ConfigureWhitelistCall) {
    this._call = call;
  }
}

export class ConfigureWhitelistCallSettingsStruct extends ethereum.Tuple {
  get enabled(): boolean {
    return this[0].toBoolean();
  }

  get root(): Bytes {
    return this[1].toBytes();
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get tokenInfo(): DepositCallTokenInfoStruct {
    return this._call.inputValues[0].value.toTuple() as DepositCallTokenInfoStruct;
  }

  get proof(): Array<Bytes> {
    return this._call.inputValues[1].value.toBytesArray();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class DepositCallTokenInfoStruct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
  }
}

export class FinalizeAssetsCall extends ethereum.Call {
  get inputs(): FinalizeAssetsCall__Inputs {
    return new FinalizeAssetsCall__Inputs(this);
  }

  get outputs(): FinalizeAssetsCall__Outputs {
    return new FinalizeAssetsCall__Outputs(this);
  }
}

export class FinalizeAssetsCall__Inputs {
  _call: FinalizeAssetsCall;

  constructor(call: FinalizeAssetsCall) {
    this._call = call;
  }

  get depositToGenesis(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class FinalizeAssetsCall__Outputs {
  _call: FinalizeAssetsCall;

  constructor(call: FinalizeAssetsCall) {
    this._call = call;
  }
}

export class PublishRatesCall extends ethereum.Call {
  get inputs(): PublishRatesCall__Inputs {
    return new PublishRatesCall__Inputs(this);
  }

  get outputs(): PublishRatesCall__Outputs {
    return new PublishRatesCall__Outputs(this);
  }
}

export class PublishRatesCall__Inputs {
  _call: PublishRatesCall;

  constructor(call: PublishRatesCall) {
    this._call = call;
  }

  get ratesData(): Array<PublishRatesCallRatesDataStruct> {
    return this._call.inputValues[0].value.toTupleArray<
      PublishRatesCallRatesDataStruct
    >();
  }

  get oversubRate(): PublishRatesCallOversubRateStruct {
    return this._call.inputValues[1].value.toTuple() as PublishRatesCallOversubRateStruct;
  }

  get lastLookDuration(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class PublishRatesCall__Outputs {
  _call: PublishRatesCall;

  constructor(call: PublishRatesCall) {
    this._call = call;
  }
}

export class PublishRatesCallRatesDataStruct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get numerator(): BigInt {
    return this[1].toBigInt();
  }

  get denominator(): BigInt {
    return this[2].toBigInt();
  }
}

export class PublishRatesCallOversubRateStruct extends ethereum.Tuple {
  get overNumerator(): BigInt {
    return this[0].toBigInt();
  }

  get overDenominator(): BigInt {
    return this[1].toBigInt();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class TransferToTreasuryCall extends ethereum.Call {
  get inputs(): TransferToTreasuryCall__Inputs {
    return new TransferToTreasuryCall__Inputs(this);
  }

  get outputs(): TransferToTreasuryCall__Outputs {
    return new TransferToTreasuryCall__Outputs(this);
  }
}

export class TransferToTreasuryCall__Inputs {
  _call: TransferToTreasuryCall;

  constructor(call: TransferToTreasuryCall) {
    this._call = call;
  }
}

export class TransferToTreasuryCall__Outputs {
  _call: TransferToTreasuryCall;

  constructor(call: TransferToTreasuryCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get tokenInfo(): WithdrawCallTokenInfoStruct {
    return this._call.inputValues[0].value.toTuple() as WithdrawCallTokenInfoStruct;
  }

  get asETH(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCallTokenInfoStruct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
  }
}
