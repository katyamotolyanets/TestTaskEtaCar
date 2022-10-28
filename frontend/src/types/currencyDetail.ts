export type CurrencyDetailType = {
  rank?: string | null;
  name: string | null;
  symbol: string | null;
  priceUsd: string | null;
  supply: string | null;
  maxSupply: string | null;
  marketCapUsd: string | null;
  vwap24Hr: string | null;
};

export interface CurrencyDetailState {
  currency: CurrencyDetailType;
  history: void[];
}

export enum CurrencyDetailActionTypes {
  FETCH_CURRENCY = 'FETCH_CURRENCY',
  FETCH_CURRENCY_HISTORY = 'FETCH_CURRENCY_HISTORY',
}

interface FetchCurrencyAction {
  type: CurrencyDetailActionTypes.FETCH_CURRENCY;
  payload: CurrencyDetailType;
}

interface FetchCurrencyHistoryAction {
  type: CurrencyDetailActionTypes.FETCH_CURRENCY_HISTORY;
  payload: void[];
}

export type CurrencyDetailAction = FetchCurrencyAction | FetchCurrencyHistoryAction;
