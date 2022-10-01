export interface WalletType {
    id: string,
    name: string,
    changePercent24Hr: string,
    priceUsd: string
}

export interface WalletState {
    currencies: any[],
    loading: boolean,
    error: null | string
}

export interface WalletCurrencyInfo {
    price: string | null,
    count: number
}

export enum WalletActionTypes {
    ADD_CURRENCY ='ADD_CURRENCY',
    ADD_CURRENCY_SUCCESS = 'ADD_CURRENCY_SUCCESS',
    ADD_CURRENCY_FAILED = 'ADD_CURRENCY_FAILED',
    GET_INITIAL_WALLET_PRICE = 'GET_INITIAL_WALLET_PRICE'
}

interface AddCurrencyAction {
    type: WalletActionTypes.ADD_CURRENCY
}

interface AddCurrencySuccessAction {
    type: WalletActionTypes.ADD_CURRENCY_SUCCESS
    payload: {
        id: string | null,
        price: string | null,
        count: number,
    }
}

interface AddCurrencyFailedAction {
    type: WalletActionTypes.ADD_CURRENCY_FAILED
    payload: string
}

interface GetInitialWalletPrice {
    type: WalletActionTypes.GET_INITIAL_WALLET_PRICE
}

export type WalletAction = AddCurrencyAction | AddCurrencySuccessAction | AddCurrencyFailedAction | GetInitialWalletPrice