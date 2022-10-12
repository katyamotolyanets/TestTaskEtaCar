export interface CurrencyState {
    currencies: any[],
    currentCurrency: {
      id: null | string,
      priceUsd: null | string
    },
    currentCurrenciesOnPage: any[],
    loading: boolean,
    error: null | string
}

export enum CurrenciesActionTypes {
    FETCH_CURRENCIES ='FETCH_CURRENCIES',
    FETCH_CURRENT_CURRENCIES_SUCCESS = 'FETCH_CURRENT_CURRENCIES_SUCCESS',
    FETCH_CURRENCIES_FAILED = 'FETCH_CURRENCIES_FAILED',
    SET_CURRENT_CURRENCY = 'SET_CURRENT_CURRENCY',
    INITIALIZE_CURRENCIES = 'INITIALIZE_CURRENCIES',
    ADD_TO_CURRENCIES = 'ADD_TO_CURRENCIES'
}

interface FetchCurrenciesAction {
    type: CurrenciesActionTypes.FETCH_CURRENCIES
}

interface FetchCurrentCurrenciesSuccessAction {
    type: CurrenciesActionTypes.FETCH_CURRENT_CURRENCIES_SUCCESS
    payload: any[]
}

interface FetchCurrenciesFailedAction {
    type: CurrenciesActionTypes.FETCH_CURRENCIES_FAILED
    payload: string
}

interface InitializeCurrenciesAction {
    type: CurrenciesActionTypes.INITIALIZE_CURRENCIES,
    payload: any[]
}

interface SetCurrentCurrencyAction {
    type: CurrenciesActionTypes.SET_CURRENT_CURRENCY
    payload: {
        id: null | string,
        priceUsd: null | string
    }
}

interface AddToCurrenciesAction {
    type: CurrenciesActionTypes.ADD_TO_CURRENCIES,
    payload: any[]
}

export type CurrencyAction = FetchCurrenciesAction | FetchCurrentCurrenciesSuccessAction | FetchCurrenciesFailedAction |
    SetCurrentCurrencyAction | InitializeCurrenciesAction | AddToCurrenciesAction