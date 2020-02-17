// generated from the schema with https://graphql-code-generator.com/

export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AssetID: any;
  AccountID: any;
  LedgerSeq: any;
  TransactionHash: any;
  MemoValue: any;
  DateTime: any;
  OfferID: any;
  AssetCode: any;
}

export interface Account {
   __typename?: 'Account';
  id: Scalars['AccountID'];
  sequenceNumber: Scalars['String'];
  numSubentries: Scalars['Int'];
  reservedBalance: Scalars['String'];
  inflationDestination?: Maybe<Account>;
  homeDomain?: Maybe<Scalars['String']>;
  thresholds: AccountThresholds;
  signers?: Maybe<Array<Maybe<Signer>>>;
  ledger: Ledger;
  data?: Maybe<Array<Maybe<DataEntry>>>;
  assets?: Maybe<AssetConnection>;
  balances?: Maybe<Array<Maybe<Balance>>>;
  operations?: Maybe<OperationConnection>;
  payments?: Maybe<OperationConnection>;
  trades?: Maybe<TradeConnection>;
  transactions?: Maybe<TransactionConnection>;
  offers?: Maybe<OfferConnection>;
}


export interface AccountAssetsArgs {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
}


export interface AccountOperationsArgs {
  type?: Maybe<Array<Maybe<OperationType>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
}


export interface AccountPaymentsArgs {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
}


export interface AccountTradesArgs {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
}


export interface AccountTransactionsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
}


export interface AccountOffersArgs {
  selling?: Maybe<Scalars['AssetID']>;
  buying?: Maybe<Scalars['AssetID']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
}

export interface AccountConnection {
   __typename?: 'AccountConnection';
  pageInfo: PageInfo;
  nodes?: Maybe<Array<Maybe<Account>>>;
  edges?: Maybe<Array<Maybe<AccountEdge>>>;
}

export interface AccountEdge {
   __typename?: 'AccountEdge';
  cursor: Scalars['String'];
  node?: Maybe<Account>;
}

export enum AccountFlagsOptions {
  AuthRequired = 'authRequired',
  AuthImmutable = 'authImmutable',
  AuthRevokable = 'authRevokable'
}


export type AccountMergeOperation = Operation & {
   __typename?: 'AccountMergeOperation',
  id: Scalars['String'],
  type: OperationType,
  sourceAccount: Account,
  dateTime: Scalars['DateTime'],
  transaction: Transaction,
  destination: Account,
};

export interface AccountSubscriptionPayload {
   __typename?: 'AccountSubscriptionPayload';
  id: Scalars['AccountID'];
  mutationType: MutationType;
  values?: Maybe<AccountValues>;
}

export interface AccountThresholds {
   __typename?: 'AccountThresholds';
  masterWeight: Scalars['Int'];
  low: Scalars['Int'];
  medium: Scalars['Int'];
  high: Scalars['Int'];
}

export interface AccountValues {
   __typename?: 'AccountValues';
  id: Scalars['AccountID'];
  sequenceNumber: Scalars['String'];
  numSubentries: Scalars['Int'];
  inflationDestination?: Maybe<Account>;
  homeDomain?: Maybe<Scalars['String']>;
  thresholds: AccountThresholds;
  signers?: Maybe<Array<Maybe<Signer>>>;
}

export type AllowTrustOperation = Operation & {
   __typename?: 'AllowTrustOperation',
  id: Scalars['String'],
  type: OperationType,
  sourceAccount: Account,
  dateTime: Scalars['DateTime'],
  transaction: Transaction,
  trustor: Account,
  authorize: Scalars['Boolean'],
  asset: Asset,
};

export interface Asset {
   __typename?: 'Asset';
  id: Scalars['AssetID'];
  issuer?: Maybe<Account>;
  code: Scalars['AssetCode'];
  totalSupply: Scalars['String'];
  circulatingSupply: Scalars['String'];
  holdersCount: Scalars['Int'];
  unauthorizedHoldersCount: Scalars['Int'];
  lastModifiedIn: Ledger;
  authRequired: Scalars['Boolean'];
  authRevocable: Scalars['Boolean'];
  authImmutable: Scalars['Boolean'];
  balances?: Maybe<BalanceConnection>;
}


export interface AssetBalancesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


export interface AssetConnection {
   __typename?: 'AssetConnection';
  pageInfo: PageInfo;
  nodes?: Maybe<Array<Maybe<Asset>>>;
  edges?: Maybe<Array<Maybe<AssetEdge>>>;
}

export interface AssetEdge {
   __typename?: 'AssetEdge';
  cursor: Scalars['String'];
  node?: Maybe<Asset>;
}


export interface Balance {
   __typename?: 'Balance';
  account?: Maybe<Account>;
  asset: Asset;
  limit: Scalars['String'];
  balance: Scalars['String'];
  spendableBalance: Scalars['String'];
  receivableBalance: Scalars['String'];
  authorized: Scalars['Boolean'];
  ledger: Ledger;
}

export interface BalanceConnection {
   __typename?: 'BalanceConnection';
  pageInfo: PageInfo;
  nodes?: Maybe<Array<Maybe<Balance>>>;
  edges?: Maybe<Array<Maybe<BalanceEdge>>>;
}

export interface BalanceEdge {
   __typename?: 'BalanceEdge';
  cursor: Scalars['String'];
  node?: Maybe<Balance>;
}

export interface BalanceSubscriptionPayload {
   __typename?: 'BalanceSubscriptionPayload';
  account: Account;
  asset: Asset;
  mutationType: MutationType;
  values?: Maybe<BalanceValues>;
}

export interface BalanceValues {
   __typename?: 'BalanceValues';
  account?: Maybe<Account>;
  asset: Asset;
  limit: Scalars['String'];
  balance: Scalars['String'];
  authorized: Scalars['Boolean'];
}

export type BumpSequenceOperation = Operation & {
   __typename?: 'BumpSequenceOperation',
  id: Scalars['String'],
  type: OperationType,
  sourceAccount: Account,
  dateTime: Scalars['DateTime'],
  transaction: Transaction,
  bumpTo: Scalars['Int'],
};

export type ChangeTrustOperation = Operation & {
   __typename?: 'ChangeTrustOperation',
  id: Scalars['String'],
  type: OperationType,
  sourceAccount: Account,
  dateTime: Scalars['DateTime'],
  transaction: Transaction,
  limit: Scalars['String'],
  asset: Asset,
};

export type CreateAccountOperation = Operation & {
   __typename?: 'CreateAccountOperation',
  id: Scalars['String'],
  type: OperationType,
  sourceAccount: Account,
  dateTime: Scalars['DateTime'],
  transaction: Transaction,
  startingBalance: Scalars['String'],
  destination: Account,
};

export type CreatePassiveSellOfferOperation = Operation & {
   __typename?: 'CreatePassiveSellOfferOperation',
  id: Scalars['String'],
  type: OperationType,
  sourceAccount: Account,
  dateTime: Scalars['DateTime'],
  transaction: Transaction,
  priceComponents: OfferPriceComponents,
  price: Scalars['String'],
  amount: Scalars['String'],
  assetSelling: Asset,
  assetBuying: Asset,
};

export interface DataEntry {
   __typename?: 'DataEntry';
  name: Scalars['String'];
  value: Scalars['String'];
  ledger: Ledger;
}

export interface DataEntrySubscriptionPayload {
   __typename?: 'DataEntrySubscriptionPayload';
  account: Account;
  name: Scalars['String'];
  mutationType: MutationType;
  values?: Maybe<DataEntryValues>;
}

export interface DataEntryValues {
   __typename?: 'DataEntryValues';
  account: Account;
  name: Scalars['String'];
  value: Scalars['String'];
  ledger: Ledger;
}

export interface DataInput {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
}


export interface EventInput {
  mutationTypeIn?: Maybe<Array<MutationType>>;
  idEq?: Maybe<Scalars['AccountID']>;
  idIn?: Maybe<Array<Scalars['AccountID']>>;
}

export type InflationOperation = Operation & {
   __typename?: 'InflationOperation',
  id: Scalars['String'],
  type: OperationType,
  sourceAccount: Account,
  dateTime: Scalars['DateTime'],
  transaction: Transaction,
};

export interface Ledger {
   __typename?: 'Ledger';
  seq: Scalars['LedgerSeq'];
  header?: Maybe<LedgerHeader>;
  transactions?: Maybe<TransactionConnection>;
  operations?: Maybe<OperationConnection>;
  payments?: Maybe<OperationConnection>;
}


export interface LedgerTransactionsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
}


export interface LedgerOperationsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
}


export interface LedgerPaymentsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
}

export interface LedgerHeader {
   __typename?: 'LedgerHeader';
  ledgerVersion: Scalars['LedgerSeq'];
  previousLedgerHash: Scalars['String'];
  txSetResultHash: Scalars['String'];
  baseFee: Scalars['Int'];
  baseReserve: Scalars['Int'];
  maxTxSetSize: Scalars['Int'];
}


export type ManageBuyOfferOperation = Operation & {
   __typename?: 'ManageBuyOfferOperation',
  id: Scalars['String'],
  type: OperationType,
  sourceAccount: Account,
  dateTime: Scalars['DateTime'],
  transaction: Transaction,
  priceComponents: OfferPriceComponents,
  price: Scalars['String'],
  offerId: Scalars['String'],
  amount: Scalars['String'],
  assetSelling: Asset,
  assetBuying: Asset,
};

export type ManageDatumOperation = Operation & {
   __typename?: 'ManageDatumOperation',
  id: Scalars['String'],
  type: OperationType,
  sourceAccount: Account,
  dateTime: Scalars['DateTime'],
  transaction: Transaction,
  name: Scalars['String'],
  value?: Maybe<Scalars['String']>,
};

export type ManageSellOfferOperation = Operation & {
   __typename?: 'ManageSellOfferOperation',
  id: Scalars['String'],
  type: OperationType,
  sourceAccount: Account,
  dateTime: Scalars['DateTime'],
  transaction: Transaction,
  priceComponents: OfferPriceComponents,
  price: Scalars['String'],
  offerId: Scalars['String'],
  amount: Scalars['String'],
  assetSelling: Asset,
  assetBuying: Asset,
};

export interface Memo {
   __typename?: 'Memo';
  value?: Maybe<Scalars['MemoValue']>;
  type: MemoType;
}

export enum MemoType {
  Id = 'id',
  Text = 'text',
  Hash = 'hash',
  Return = 'return',
  None = 'none'
}


export enum MutationType {
  Create = 'CREATE',
  Update = 'UPDATE',
  Remove = 'REMOVE'
}

export interface Offer {
   __typename?: 'Offer';
  id: Scalars['OfferID'];
  seller: Account;
  selling: Asset;
  buying: Asset;
  amount: Scalars['String'];
  price: Scalars['String'];
  passive: Scalars['Boolean'];
  ledger: Ledger;
  trades: TradeConnection;
}


export interface OfferTradesArgs {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
}

export interface OfferConnection {
   __typename?: 'OfferConnection';
  pageInfo: PageInfo;
  nodes?: Maybe<Array<Maybe<Offer>>>;
  edges?: Maybe<Array<Maybe<OfferEdge>>>;
}

export interface OfferEdge {
   __typename?: 'OfferEdge';
  cursor: Scalars['String'];
  node?: Maybe<Offer>;
}

export interface OfferEventInput {
  mutationTypeIn?: Maybe<Array<MutationType>>;
  idEq?: Maybe<Scalars['AccountID']>;
  idIn?: Maybe<Array<Scalars['AccountID']>>;
  buyingAssetEq?: Maybe<Scalars['AssetID']>;
  sellingAssetEq?: Maybe<Scalars['AssetID']>;
}


export interface OfferPriceComponents {
   __typename?: 'OfferPriceComponents';
  n: Scalars['Int'];
  d: Scalars['Int'];
}

export interface OfferSubscriptionPayload {
   __typename?: 'OfferSubscriptionPayload';
  accountID: Scalars['AccountID'];
  mutationType: MutationType;
  offerID: Scalars['OfferID'];
  values?: Maybe<OfferValues>;
}

export interface OfferValues {
   __typename?: 'OfferValues';
  id: Scalars['OfferID'];
  seller: Account;
  selling: Asset;
  buying: Asset;
  amount: Scalars['String'];
  price: Scalars['String'];
  passive: Scalars['Boolean'];
}

export interface Operation {
  id: Scalars['String'];
  type: OperationType;
  sourceAccount: Account;
  dateTime: Scalars['DateTime'];
  transaction: Transaction;
}

export interface OperationConnection {
   __typename?: 'OperationConnection';
  pageInfo: PageInfo;
  nodes?: Maybe<Array<Maybe<Operation>>>;
  edges?: Maybe<Array<Maybe<OperationEdge>>>;
}

export interface OperationEdge {
   __typename?: 'OperationEdge';
  cursor: Scalars['String'];
  node?: Maybe<Operation>;
}

export enum OperationType {
  Payment = 'payment',
  SetOption = 'setOption',
  AccountMerge = 'accountMerge',
  AllowTrust = 'allowTrust',
  BumpSequence = 'bumpSequence',
  ChangeTrust = 'changeTrust',
  CreateAccount = 'createAccount',
  ManageDatum = 'manageDatum',
  ManageSellOffer = 'manageSellOffer',
  ManageBuyOffer = 'manageBuyOffer',
  CreatePassiveSellOffer = 'createPassiveSellOffer',
  PathPayment = 'pathPayment',
  Inflation = 'inflation',
  PathPaymentStrictSend = 'pathPaymentStrictSend'
}

export enum Order {
  Desc = 'desc',
  Asc = 'asc'
}

export interface OrderBook {
   __typename?: 'OrderBook';
  bids?: Maybe<Array<OrderBookItem>>;
  asks?: Maybe<Array<OrderBookItem>>;
}

export interface OrderBookItem {
   __typename?: 'OrderBookItem';
  price: Scalars['String'];
  amount: Scalars['String'];
}

export interface PageInfo {
   __typename?: 'PageInfo';
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
}

export type PathPaymentOperation = Operation & {
   __typename?: 'PathPaymentOperation',
  id: Scalars['String'],
  type: OperationType,
  sourceAccount: Account,
  dateTime: Scalars['DateTime'],
  transaction: Transaction,
  sendMax: Scalars['String'],
  amountSent?: Maybe<Scalars['String']>,
  amountReceived?: Maybe<Scalars['String']>,
  destinationAsset: Asset,
  sourceAsset: Asset,
  destinationAccount: Account,
  path?: Maybe<Array<Maybe<Asset>>>,
};

export type PathPaymentStrictSendOperation = Operation & {
   __typename?: 'PathPaymentStrictSendOperation',
  id: Scalars['String'],
  type: OperationType,
  sourceAccount: Account,
  dateTime: Scalars['DateTime'],
  transaction: Transaction,
  destinationMin: Scalars['String'],
  amountSent?: Maybe<Scalars['String']>,
  amountReceived?: Maybe<Scalars['String']>,
  destinationAsset: Asset,
  sourceAsset: Asset,
  destinationAccount: Account,
};

export type PaymentOperation = Operation & {
   __typename?: 'PaymentOperation',
  id: Scalars['String'],
  type: OperationType,
  sourceAccount: Account,
  dateTime: Scalars['DateTime'],
  transaction: Transaction,
  destination: Account,
  asset: Asset,
  amount: Scalars['String'],
};

export interface PaymentPath {
   __typename?: 'PaymentPath';
  sourceAsset: Asset;
  sourceAmount: Scalars['String'];
  destinationAsset: Asset;
  destinationAmount: Scalars['String'];
  path?: Maybe<Array<Asset>>;
}

export interface Query {
   __typename?: 'Query';
  asset?: Maybe<Asset>;
  assets?: Maybe<AssetConnection>;
  account?: Maybe<Account>;
  accounts?: Maybe<AccountConnection>;
  ledger: Ledger;
  ledgers: Array<Maybe<Ledger>>;
  offers?: Maybe<OfferConnection>;
  tick?: Maybe<Tick>;
  transaction?: Maybe<Transaction>;
  transactions?: Maybe<TransactionConnection>;
  operations?: Maybe<OperationConnection>;
  operation?: Maybe<Operation>;
  orderBook?: Maybe<OrderBook>;
  findPaymentPaths?: Maybe<Array<PaymentPath>>;
  trades: TradeConnection;
}


export interface QueryAssetArgs {
  id?: Maybe<Scalars['AssetID']>;
}


export interface QueryAssetsArgs {
  code?: Maybe<Scalars['AssetCode']>;
  issuer?: Maybe<Scalars['AccountID']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
}


export interface QueryAccountArgs {
  id: Scalars['AccountID'];
}


export interface QueryAccountsArgs {
  ids?: Maybe<Array<Scalars['AccountID']>>;
  inflationDestination?: Maybe<Scalars['AccountID']>;
  homeDomain?: Maybe<Scalars['String']>;
  data?: Maybe<DataInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


export interface QueryLedgerArgs {
  seq: Scalars['LedgerSeq'];
}


export interface QueryLedgersArgs {
  seq?: Maybe<Array<Scalars['LedgerSeq']>>;
}


export interface QueryOffersArgs {
  selling: Scalars['AssetCode'];
  buying: Scalars['AssetCode'];
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
}


export interface QueryTickArgs {
  selling: Scalars['AssetID'];
  buying: Scalars['AssetID'];
}


export interface QueryTransactionArgs {
  id: Scalars['TransactionHash'];
}


export interface QueryTransactionsArgs {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
}


export interface QueryOperationsArgs {
  type?: Maybe<Array<Maybe<OperationType>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
}


export interface QueryOperationArgs {
  id?: Maybe<Scalars['String']>;
}


export interface QueryOrderBookArgs {
  selling: Scalars['AssetID'];
  buying: Scalars['AssetID'];
  limit?: Maybe<Scalars['Int']>;
}


export interface QueryFindPaymentPathsArgs {
  sourceAccountID: Scalars['AccountID'];
  destinationAsset: Scalars['AssetID'];
  destinationAmount: Scalars['String'];
}


export interface QueryTradesArgs {
  assetSold?: Maybe<Scalars['AssetID']>;
  assetBought?: Maybe<Scalars['AssetID']>;
  offer?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
}

export type SetOptionsOperation = Operation & {
   __typename?: 'SetOptionsOperation',
  id: Scalars['String'],
  type: OperationType,
  sourceAccount: Account,
  dateTime: Scalars['DateTime'],
  transaction: Transaction,
  clearFlags?: Maybe<Array<Maybe<AccountFlagsOptions>>>,
  setFlags?: Maybe<Array<Maybe<AccountFlagsOptions>>>,
  homeDomain?: Maybe<Scalars['String']>,
  masterWeight?: Maybe<Scalars['Int']>,
  thresholds?: Maybe<SetOptionsThresholds>,
  signer?: Maybe<SetOptionsSigner>,
  inflationDestination?: Maybe<Account>,
};

export interface SetOptionsSigner {
   __typename?: 'SetOptionsSigner';
  account?: Maybe<Account>;
  weight?: Maybe<Scalars['Int']>;
}

export interface SetOptionsThresholds {
   __typename?: 'SetOptionsThresholds';
  low?: Maybe<Scalars['Int']>;
  medium?: Maybe<Scalars['Int']>;
  high?: Maybe<Scalars['Int']>;
}

export interface Signer {
   __typename?: 'Signer';
  signer: Scalars['AccountID'];
  weight: Scalars['Int'];
  type?: Maybe<SignerType>;
}

export enum SignerType {
  Ed25519 = 'ed25519',
  PreAuthX = 'preAuthX',
  HashX = 'hashX'
}

export interface Subscription {
   __typename?: 'Subscription';
  balance?: Maybe<BalanceSubscriptionPayload>;
  dataEntry?: Maybe<DataEntrySubscriptionPayload>;
  account?: Maybe<AccountSubscriptionPayload>;
  ledgerCreated?: Maybe<Ledger>;
  offer?: Maybe<OfferSubscriptionPayload>;
  tick?: Maybe<Tick>;
  operations: Operation;
}


export interface SubscriptionBalanceArgs {
  args?: Maybe<EventInput>;
}


export interface SubscriptionDataEntryArgs {
  args?: Maybe<EventInput>;
}


export interface SubscriptionAccountArgs {
  args?: Maybe<EventInput>;
}


export interface SubscriptionOfferArgs {
  args?: Maybe<OfferEventInput>;
}


export interface SubscriptionTickArgs {
  selling?: Maybe<Scalars['AssetID']>;
  buying?: Maybe<Scalars['AssetID']>;
}


export interface SubscriptionOperationsArgs {
  txSource?: Maybe<Array<Maybe<Scalars['AccountID']>>>;
  opSource?: Maybe<Array<Maybe<Scalars['AccountID']>>>;
  type?: Maybe<Array<Maybe<OperationType>>>;
  destination?: Maybe<Array<Maybe<Scalars['AccountID']>>>;
  asset?: Maybe<Array<Maybe<Scalars['AssetID']>>>;
}

export interface Tick {
   __typename?: 'Tick';
  selling?: Maybe<Scalars['AssetID']>;
  buying?: Maybe<Scalars['AssetID']>;
  bestBid?: Maybe<Scalars['Float']>;
  bestAsk?: Maybe<Scalars['Float']>;
}

export interface TimeBounds {
   __typename?: 'TimeBounds';
  minTime: Scalars['DateTime'];
  maxTime?: Maybe<Scalars['DateTime']>;
}

export interface Trade {
   __typename?: 'Trade';
  id?: Maybe<Scalars['String']>;
  ledgerCloseTime: Scalars['DateTime'];
  offer?: Maybe<Scalars['OfferID']>;
  seller?: Maybe<Account>;
  amountSold: Scalars['String'];
  assetSold: Asset;
  buyer?: Maybe<Account>;
  amountBought: Scalars['String'];
  assetBought: Asset;
  price?: Maybe<Scalars['String']>;
}

export interface TradeConnection {
   __typename?: 'TradeConnection';
  pageInfo: PageInfo;
  nodes?: Maybe<Array<Maybe<Trade>>>;
  edges?: Maybe<Array<Maybe<TradeEdge>>>;
}

export interface TradeEdge {
   __typename?: 'TradeEdge';
  cursor: Scalars['String'];
  node?: Maybe<Trade>;
}

export interface Transaction {
   __typename?: 'Transaction';
  id: Scalars['TransactionHash'];
  ledger: Ledger;
  index: Scalars['Int'];
  memo?: Maybe<Memo>;
  feeAmount: Scalars['Int'];
  sourceAccount: Account;
  timeBounds?: Maybe<TimeBounds>;
  feeCharged: Scalars['Int'];
  success: Scalars['Boolean'];
  resultCode: Scalars['Int'];
  operations?: Maybe<OperationConnection>;
  payments?: Maybe<OperationConnection>;
}


export interface TransactionOperationsArgs {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
}


export interface TransactionPaymentsArgs {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
}

export interface TransactionConnection {
   __typename?: 'TransactionConnection';
  pageInfo: PageInfo;
  nodes?: Maybe<Array<Maybe<Transaction>>>;
  edges?: Maybe<Array<Maybe<TransactionEdge>>>;
}

export interface TransactionEdge {
   __typename?: 'TransactionEdge';
  cursor: Scalars['String'];
  node?: Maybe<Transaction>;
}

