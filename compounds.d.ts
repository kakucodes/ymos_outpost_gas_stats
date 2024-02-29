export interface CompoundResp {
  total_count: string;
  count: string;
  page_number: string;
  page_total: string;
  limit: string;
  txs: TxElement[];
}

export interface TxElement {
  height: string;
  txhash: string;
  codespace: string;
  code: number;
  data: string;
  raw_log: string;
  logs: Log[];
  info: string;
  gas_wanted: string;
  gas_used: string;
  tx: TxTx;
  timestamp: Date;
  events: TxEvent[];
}

export interface TxEvent {
  type: Type;
  attributes: PurpleAttribute[];
}

export interface PurpleAttribute {
  key: AttributeKey;
  value: string;
  index: boolean;
}

export enum AttributeKey {
  AccSeq = "acc_seq",
  Action = "action",
  Amount = "amount",
  Amount0 = "amount_0",
  AskAsset = "ask_asset",
  Asset = "asset",
  AuthzMsgIndex = "authz_msg_index",
  CommissionAmount = "commission_amount",
  ContractAddress = "_contract_address",
  DAO = "dao",
  Delegator = "delegator",
  Fee = "fee",
  FeePayer = "fee_payer",
  Grantee = "grantee",
  Granter = "granter",
  Lottery = "lottery",
  Module = "module",
  NewShares = "new_shares",
  OfferAmount = "offer_amount",
  OfferAsset = "offer_asset",
  Payouts = "payouts",
  ProtocolFeeAmount = "protocol_fee_amount",
  Receiver = "receiver",
  Recipient = "recipient",
  ReturnAmount = "return_amount",
  Sender = "sender",
  Signature = "signature",
  Spender = "spender",
  SpreadAmount = "spread_amount",
  Status = "status",
  Subaction = "subaction",
  Tickets = "tickets",
  ToAddress = "to_address",
  Validator = "validator",
  WithdrawAddress = "withdraw_address",
}

export enum Type {
  CoinReceived = "coin_received",
  CoinSpent = "coin_spent",
  Delegate = "delegate",
  Execute = "execute",
  Message = "message",
  PayoutFeeshare = "payout_feeshare",
  SetWithdrawAddress = "set_withdraw_address",
  Transfer = "transfer",
  Tx = "tx",
  WASM = "wasm",
  WASMAmountAutomated = "wasm-amount_automated",
  WASMDAOStake = "wasm-dao_stake",
  WASMDelegate = "wasm-delegate",
  WASMGelottoLottery = "wasm-gelotto_lottery",
  WASMSendTokens = "wasm-send_tokens",
  WithdrawRewards = "withdraw_rewards",
}

export interface Log {
  msg_index: number;
  log: string;
  events: LogEvent[];
}

export interface LogEvent {
  type: Type;
  attributes: FluffyAttribute[];
}

export interface FluffyAttribute {
  key: AttributeKey;
  value: string;
}

export interface TxTx {
  "@type": TxType;
  body: Body;
  auth_info: AuthInfo;
  signatures: string[];
}

export enum TxType {
  CosmosTxV1Beta1Tx = "/cosmos.tx.v1beta1.Tx",
}

export interface AuthInfo {
  signer_infos: SignerInfo[];
  fee: Fee;
  tip: null;
}

export interface Fee {
  amount: Amount[];
  gas_limit: string;
  payer: string;
  granter: string;
}

export interface Amount {
  denom: DenomEnum;
  amount: string;
}

export enum DenomEnum {
  Ujuno = "ujuno",
}

export interface SignerInfo {
  public_key: PublicKey;
  mode_info: ModeInfo;
  sequence: string;
}

export interface ModeInfo {
  single: Single;
}

export interface Single {
  mode: Mode;
}

export enum Mode {
  SignModeDirect = "SIGN_MODE_DIRECT",
}

export interface PublicKey {
  "@type": PublicKeyType;
  key: PublicKeyKey;
}

export enum PublicKeyType {
  CosmosCryptoSecp256K1PubKey = "/cosmos.crypto.secp256k1.PubKey",
}

export enum PublicKeyKey {
  Ao5Or9WLFO2G7FBHPJh0OBlEizYIVjBdRc5Mww2P2LB = "Ao5or9wLFO2G7FBHpJh0o+BlEizYIVjBdRc5mww2p2Lb",
}

export interface Body {
  messages: Message[];
  memo: Memo;
  timeout_height: string;
  extension_options: any[];
  non_critical_extension_options: any[];
}

export enum Memo {
  YieldmosCOM = "Yieldmos.com",
}

export interface Message {
  "@type": MessageType;
  sender: string;
  contract: Contract;
  msg: Msg;
  funds: any[];
}

export enum MessageType {
  CosmwasmWASMV1MsgExecuteContract = "/cosmwasm.wasm.v1.MsgExecuteContract",
}

export enum Contract {
  Juno1Uaf673War8S0Yg25Saa07Rps796R88Dh3Luar54D06Ug8Heqm5Jq4Ccqvv = "juno1uaf673war8s0yg25saa07rps796r88dh3luar54d06ug8heqm5jq4ccqvv",
}

export interface Msg {
  compound: Compound;
}

export interface Compound {
  user_address: string;
  comp_prefs: CompPrefs;
  tax_fee: string;
}

export interface CompPrefs {
  relative: Relative[];
}

export interface Relative {
  amount: string;
  destination: Destination;
}

export interface Destination {
  token_swap?: TokenSwap;
  juno_staking?: JunoStaking;
  unallocated?: Unallocated;
  send_tokens?: SendTokens;
  dao_staking?: string;
  gelotto_lottery?: GelottoLottery;
}

export interface GelottoLottery {
  lottery: string;
  lucky_phrase: number;
}

export interface JunoStaking {
  validator_address: string;
}

export interface SendTokens {
  address: string;
  denom: DenomClass;
}

export interface DenomClass {
  native: string;
}

export interface TokenSwap {
  target_denom: DenomClass;
}

export interface Unallocated {}
