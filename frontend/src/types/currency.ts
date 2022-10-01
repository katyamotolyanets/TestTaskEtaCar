export interface CurrencyType {
    id: string,
    name: string,
    changePercent24Hr: string,
    priceUsd: string
}

export interface CurrencyState {
    currencies: any[],
    currentCurrency: {
      id: null | string,
      priceUsd: null | string
    },
    loading: boolean,
    error: null | string
}

export enum CurrenciesActionTypes {
    FETCH_CURRENCIES ='FETCH_CURRENCIES',
    FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS',
    FETCH_CURRENCIES_FAILED = 'FETCH_CURRENCIES_FAILED',
    SET_CURRENT_CURRENCY = 'SET_CURRENT_CURRENCY'
}

interface FetchCurrenciesAction {
    type: CurrenciesActionTypes.FETCH_CURRENCIES
}

interface FetchCurrenciesSuccessAction {
    type: CurrenciesActionTypes.FETCH_CURRENCIES_SUCCESS
    payload: any[]
}

interface FetchCurrenciesFailedAction {
    type: CurrenciesActionTypes.FETCH_CURRENCIES_FAILED
    payload: string
}

interface SetCurrentCurrencyAction {
    type: CurrenciesActionTypes.SET_CURRENT_CURRENCY
    payload: {
        id: null | string,
        priceUsd: null | string
    }
}

export type CurrencyAction = FetchCurrenciesAction |
    FetchCurrenciesSuccessAction |
    FetchCurrenciesFailedAction |
    SetCurrentCurrencyAction