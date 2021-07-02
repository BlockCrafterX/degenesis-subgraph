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

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get data(): Array<AssetsFinalizedDataStruct> {
    return this._event.parameters[1].value.toTupleArray<
      AssetsFinalizedDataStruct
    >();
  }
}

export class AssetsFinalizedDataStruct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get transferredToFarm(): BigInt {
    return this[1].toBigInt();
  }

  get refunded(): BigInt {
    return this[2].toBigInt();
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

  get tokenInfo(): Array<DepositedTokenInfoStruct> {
    return this._event.parameters[1].value.toTupleArray<
      DepositedTokenInfoStruct
    >();
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

export class DurationSet extends ethereum.Event {
  get params(): DurationSet__Params {
    return new DurationSet__Params(this);
  }
}

export class DurationSet__Params {
  _event: DurationSet;

  constructor(event: DurationSet) {
    this._event = event;
  }

  get duration(): DurationSetDurationStruct {
    return this._event.parameters[0].value.toTuple() as DurationSetDurationStruct;
  }
}

export class DurationSetDurationStruct extends ethereum.Tuple {
  get startingBlock(): BigInt {
    return this[0].toBigInt();
  }

  get blockDuration(): BigInt {
    return this[1].toBigInt();
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

  get tokeNumerator(): BigInt {
    return this[1].toBigInt();
  }

  get tokeDenominator(): BigInt {
    return this[2].toBigInt();
  }

  get overNumerator(): BigInt {
    return this[3].toBigInt();
  }

  get overDenominator(): BigInt {
    return this[4].toBigInt();
  }

  get pool(): Address {
    return this[5].toAddress();
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

  get maxUserLimit(): BigInt {
    return this[1].toBigInt();
  }
}

export class TreasurySet extends ethereum.Event {
  get params(): TreasurySet__Params {
    return new TreasurySet__Params(this);
  }
}

export class TreasurySet__Params {
  _event: TreasurySet;

  constructor(event: TreasurySet) {
    this._event = event;
  }

  get treasury(): Address {
    return this._event.parameters[0].value.toAddress();
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

  get tokens(): Array<TreasuryTransferTokensStruct> {
    return this._event.parameters[0].value.toTupleArray<
      TreasuryTransferTokensStruct
    >();
  }
}

export class TreasuryTransferTokensStruct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
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

  get tokenInfo(): Array<WithdrawnTokenInfoStruct> {
    return this._event.parameters[1].value.toTupleArray<
      WithdrawnTokenInfoStruct
    >();
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

export class CoreEvent__accountDataResult {
  value0: Address;
  value1: BigInt;
  value2: boolean;

  constructor(value0: Address, value1: BigInt, value2: boolean) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromBoolean(this.value2));
    return map;
  }
}

export class CoreEvent__durationInfoResult {
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

export class CoreEvent__getAccountDataResultDataStruct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get depositedBalance(): BigInt {
    return this[1].toBigInt();
  }

  get finalized(): boolean {
    return this[2].toBoolean();
  }
}

export class CoreEvent__getRateAdjustedAmountsResult {
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

export class CoreEvent__getRatesResultRatesStruct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get tokeNumerator(): BigInt {
    return this[1].toBigInt();
  }

  get tokeDenominator(): BigInt {
    return this[2].toBigInt();
  }

  get overNumerator(): BigInt {
    return this[3].toBigInt();
  }

  get overDenominator(): BigInt {
    return this[4].toBigInt();
  }

  get pool(): Address {
    return this[5].toAddress();
  }
}

export class CoreEvent__getSupportedTokensResultSupportedTokensArrayStruct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get maxUserLimit(): BigInt {
    return this[1].toBigInt();
  }
}

export class CoreEvent__supportedTokensResult {
  value0: Address;
  value1: BigInt;

  constructor(value0: Address, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class CoreEvent__tokenRatesResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: Address;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    return map;
  }
}

export class CoreEvent__whitelistSettingsResult {
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

export class CoreEvent extends ethereum.SmartContract {
  static bind(address: Address): CoreEvent {
    return new CoreEvent("CoreEvent", address);
  }

  accountData(param0: Address, param1: Address): CoreEvent__accountDataResult {
    let result = super.call(
      "accountData",
      "accountData(address,address):(address,uint256,bool)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );

    return new CoreEvent__accountDataResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBoolean()
    );
  }

  try_accountData(
    param0: Address,
    param1: Address
  ): ethereum.CallResult<CoreEvent__accountDataResult> {
    let result = super.tryCall(
      "accountData",
      "accountData(address,address):(address,uint256,bool)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new CoreEvent__accountDataResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBoolean()
      )
    );
  }

  durationInfo(): CoreEvent__durationInfoResult {
    let result = super.call(
      "durationInfo",
      "durationInfo():(uint256,uint256)",
      []
    );

    return new CoreEvent__durationInfoResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_durationInfo(): ethereum.CallResult<CoreEvent__durationInfoResult> {
    let result = super.tryCall(
      "durationInfo",
      "durationInfo():(uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new CoreEvent__durationInfoResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  getAccountData(
    account: Address
  ): Array<CoreEvent__getAccountDataResultDataStruct> {
    let result = super.call(
      "getAccountData",
      "getAccountData(address):((address,uint256,bool)[])",
      [ethereum.Value.fromAddress(account)]
    );

    return result[0].toTupleArray<CoreEvent__getAccountDataResultDataStruct>();
  }

  try_getAccountData(
    account: Address
  ): ethereum.CallResult<Array<CoreEvent__getAccountDataResultDataStruct>> {
    let result = super.tryCall(
      "getAccountData",
      "getAccountData(address):((address,uint256,bool)[])",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<CoreEvent__getAccountDataResultDataStruct>()
    );
  }

  getRateAdjustedAmounts(
    balance: BigInt,
    token: Address
  ): CoreEvent__getRateAdjustedAmountsResult {
    let result = super.call(
      "getRateAdjustedAmounts",
      "getRateAdjustedAmounts(uint256,address):(uint256,uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(balance),
        ethereum.Value.fromAddress(token)
      ]
    );

    return new CoreEvent__getRateAdjustedAmountsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_getRateAdjustedAmounts(
    balance: BigInt,
    token: Address
  ): ethereum.CallResult<CoreEvent__getRateAdjustedAmountsResult> {
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
      new CoreEvent__getRateAdjustedAmountsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  getRates(): Array<CoreEvent__getRatesResultRatesStruct> {
    let result = super.call(
      "getRates",
      "getRates():((address,uint256,uint256,uint256,uint256,address)[])",
      []
    );

    return result[0].toTupleArray<CoreEvent__getRatesResultRatesStruct>();
  }

  try_getRates(): ethereum.CallResult<
    Array<CoreEvent__getRatesResultRatesStruct>
  > {
    let result = super.tryCall(
      "getRates",
      "getRates():((address,uint256,uint256,uint256,uint256,address)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<CoreEvent__getRatesResultRatesStruct>()
    );
  }

  getSupportedTokens(): Array<
    CoreEvent__getSupportedTokensResultSupportedTokensArrayStruct
  > {
    let result = super.call(
      "getSupportedTokens",
      "getSupportedTokens():((address,uint256)[])",
      []
    );

    return result[0].toTupleArray<
      CoreEvent__getSupportedTokensResultSupportedTokensArrayStruct
    >();
  }

  try_getSupportedTokens(): ethereum.CallResult<
    Array<CoreEvent__getSupportedTokensResultSupportedTokensArrayStruct>
  > {
    let result = super.tryCall(
      "getSupportedTokens",
      "getSupportedTokens():((address,uint256)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<
        CoreEvent__getSupportedTokensResultSupportedTokensArrayStruct
      >()
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

  ratesPublished(): boolean {
    let result = super.call("ratesPublished", "ratesPublished():(bool)", []);

    return result[0].toBoolean();
  }

  try_ratesPublished(): ethereum.CallResult<boolean> {
    let result = super.tryCall("ratesPublished", "ratesPublished():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  supportedTokens(param0: Address): CoreEvent__supportedTokensResult {
    let result = super.call(
      "supportedTokens",
      "supportedTokens(address):(address,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new CoreEvent__supportedTokensResult(
      result[0].toAddress(),
      result[1].toBigInt()
    );
  }

  try_supportedTokens(
    param0: Address
  ): ethereum.CallResult<CoreEvent__supportedTokensResult> {
    let result = super.tryCall(
      "supportedTokens",
      "supportedTokens(address):(address,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new CoreEvent__supportedTokensResult(
        value[0].toAddress(),
        value[1].toBigInt()
      )
    );
  }

  tokenRates(param0: Address): CoreEvent__tokenRatesResult {
    let result = super.call(
      "tokenRates",
      "tokenRates(address):(address,uint256,uint256,uint256,uint256,address)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new CoreEvent__tokenRatesResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toAddress()
    );
  }

  try_tokenRates(
    param0: Address
  ): ethereum.CallResult<CoreEvent__tokenRatesResult> {
    let result = super.tryCall(
      "tokenRates",
      "tokenRates(address):(address,uint256,uint256,uint256,uint256,address)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new CoreEvent__tokenRatesResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toAddress()
      )
    );
  }

  treasuryAddress(): Address {
    let result = super.call(
      "treasuryAddress",
      "treasuryAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_treasuryAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "treasuryAddress",
      "treasuryAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  whitelistSettings(): CoreEvent__whitelistSettingsResult {
    let result = super.call(
      "whitelistSettings",
      "whitelistSettings():(bool,bytes32)",
      []
    );

    return new CoreEvent__whitelistSettingsResult(
      result[0].toBoolean(),
      result[1].toBytes()
    );
  }

  try_whitelistSettings(): ethereum.CallResult<
    CoreEvent__whitelistSettingsResult
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
      new CoreEvent__whitelistSettingsResult(
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

  get tokensToSupport(): Array<ConstructorCallTokensToSupportStruct> {
    return this._call.inputValues[0].value.toTupleArray<
      ConstructorCallTokensToSupportStruct
    >();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCallTokensToSupportStruct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get maxUserLimit(): BigInt {
    return this[1].toBigInt();
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

  get maxUserLimit(): BigInt {
    return this[1].toBigInt();
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

  get tokenData(): Array<DepositCallTokenDataStruct> {
    return this._call.inputValues[0].value.toTupleArray<
      DepositCallTokenDataStruct
    >();
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

export class DepositCallTokenDataStruct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
  }
}

export class FinalizeCall extends ethereum.Call {
  get inputs(): FinalizeCall__Inputs {
    return new FinalizeCall__Inputs(this);
  }

  get outputs(): FinalizeCall__Outputs {
    return new FinalizeCall__Outputs(this);
  }
}

export class FinalizeCall__Inputs {
  _call: FinalizeCall;

  constructor(call: FinalizeCall) {
    this._call = call;
  }

  get tokens(): Array<FinalizeCallTokensStruct> {
    return this._call.inputValues[0].value.toTupleArray<
      FinalizeCallTokensStruct
    >();
  }
}

export class FinalizeCall__Outputs {
  _call: FinalizeCall;

  constructor(call: FinalizeCall) {
    this._call = call;
  }
}

export class FinalizeCallTokensStruct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get sendToFarming(): boolean {
    return this[1].toBoolean();
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

export class SetDurationCall extends ethereum.Call {
  get inputs(): SetDurationCall__Inputs {
    return new SetDurationCall__Inputs(this);
  }

  get outputs(): SetDurationCall__Outputs {
    return new SetDurationCall__Outputs(this);
  }
}

export class SetDurationCall__Inputs {
  _call: SetDurationCall;

  constructor(call: SetDurationCall) {
    this._call = call;
  }

  get _blockDuration(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetDurationCall__Outputs {
  _call: SetDurationCall;

  constructor(call: SetDurationCall) {
    this._call = call;
  }
}

export class SetRatesCall extends ethereum.Call {
  get inputs(): SetRatesCall__Inputs {
    return new SetRatesCall__Inputs(this);
  }

  get outputs(): SetRatesCall__Outputs {
    return new SetRatesCall__Outputs(this);
  }
}

export class SetRatesCall__Inputs {
  _call: SetRatesCall;

  constructor(call: SetRatesCall) {
    this._call = call;
  }

  get rates(): Array<SetRatesCallRatesStruct> {
    return this._call.inputValues[0].value.toTupleArray<
      SetRatesCallRatesStruct
    >();
  }
}

export class SetRatesCall__Outputs {
  _call: SetRatesCall;

  constructor(call: SetRatesCall) {
    this._call = call;
  }
}

export class SetRatesCallRatesStruct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get tokeNumerator(): BigInt {
    return this[1].toBigInt();
  }

  get tokeDenominator(): BigInt {
    return this[2].toBigInt();
  }

  get overNumerator(): BigInt {
    return this[3].toBigInt();
  }

  get overDenominator(): BigInt {
    return this[4].toBigInt();
  }

  get pool(): Address {
    return this[5].toAddress();
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

  get tokens(): Array<TransferToTreasuryCallTokensStruct> {
    return this._call.inputValues[0].value.toTupleArray<
      TransferToTreasuryCallTokensStruct
    >();
  }
}

export class TransferToTreasuryCall__Outputs {
  _call: TransferToTreasuryCall;

  constructor(call: TransferToTreasuryCall) {
    this._call = call;
  }
}

export class TransferToTreasuryCallTokensStruct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
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

  get tokenData(): Array<WithdrawCallTokenDataStruct> {
    return this._call.inputValues[0].value.toTupleArray<
      WithdrawCallTokenDataStruct
    >();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCallTokenDataStruct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
  }
}