export type CurrencyType = {
  id: string;
  name: string;
  changePercent24Hr: string;
  priceUsd: string;
  symbol?: string;
  rank?: string;
};

export type CurrencyState = {
  currencies: CurrencyType[];
  currentCurrency: {
    id: null | string;
    priceUsd: null | string;
  };
  currentCurrenciesOnPage: CurrencyType[];
  loading: boolean;
  error: null | string;
};

export enum CurrenciesActionTypes {
  FETCH_CURRENCIES = 'FETCH_CURRENCIES',
  FETCH_CURRENT_CURRENCIES_SUCCESS = 'FETCH_CURRENT_CURRENCIES_SUCCESS',
  FETCH_CURRENCIES_FAILED = 'FETCH_CURRENCIES_FAILED',
  SET_CURRENT_CURRENCY = 'SET_CURRENT_CURRENCY',
  INITIALIZE_CURRENCIES = 'INITIALIZE_CURRENCIES',
  ADD_TO_CURRENCIES = 'ADD_TO_CURRENCIES',
}

type FetchCurrenciesAction = {
  type: CurrenciesActionTypes.FETCH_CURRENCIES;
};

type FetchCurrentCurrenciesSuccessAction = {
  type: CurrenciesActionTypes.FETCH_CURRENT_CURRENCIES_SUCCESS;
  payload: CurrencyType[];
};

type FetchCurrenciesFailedAction = {
  type: CurrenciesActionTypes.FETCH_CURRENCIES_FAILED;
  payload: string;
};

type InitializeCurrenciesAction = {
  type: CurrenciesActionTypes.INITIALIZE_CURRENCIES;
  payload: CurrencyType[];
};

type SetCurrentCurrencyAction = {
  type: CurrenciesActionTypes.SET_CURRENT_CURRENCY;
  payload: {
    id: null | string;
    priceUsd: null | string;
  };
};

type AddToCurrenciesAction = {
  type: CurrenciesActionTypes.ADD_TO_CURRENCIES;
  payload: CurrencyType;
};

export type CurrencyAction =
  | FetchCurrenciesAction
  | FetchCurrentCurrenciesSuccessAction
  | FetchCurrenciesFailedAction
  | SetCurrentCurrencyAction
  | InitializeCurrenciesAction
  | AddToCurrenciesAction;
