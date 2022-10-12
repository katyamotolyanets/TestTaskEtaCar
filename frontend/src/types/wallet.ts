export interface WalletType {
    id: string,
    name: string,
    changePercent24Hr: string,
    priceUsd: string
}

export interface WalletState {
    currencies: any[],
    loading: boolean,
    visible: boolean,
    currentWalletPrice: number,
}

export interface WalletCurrencyInfo {
    id: string,
    price: string | null,
    count: number
}

export enum WalletActionTypes {
    ADD_CURRENCY = 'ADD_CURRENCY',
    DELETE_CURRENCY = 'DELETE_CURRENCY',
    GET_INITIAL_WALLET_PRICE = 'GET_INITIAL_WALLET_PRICE',
    SET_MODAL_VISIBLE = 'SET_MODAL_VISIBLE',
    SET_MODAL_INVISIBLE = 'SET_MODAL_INVISIBLE',
    INITIALIZE_WALLET = 'INITIALIZE_WALLET',
    SET_CURRENT_WALLET_PRICE = 'SET_CURRENT_WALLET_PRICE',
}

interface AddCurrencyAction {
    type: WalletActionTypes.ADD_CURRENCY
    payload: {
        id: string | null,
        price: string | null,
        count: number,
    }
}

interface DeleteCurrencyAction {
    type: WalletActionTypes.DELETE_CURRENCY
    payload: string
}

interface GetInitialWalletPriceAction {
    type: WalletActionTypes.GET_INITIAL_WALLET_PRICE
}

interface SetModalVisibleAction {
    type: WalletActionTypes.SET_MODAL_VISIBLE
}

interface SetModalInvisibleAction {
    type: WalletActionTypes.SET_MODAL_INVISIBLE
}

interface InitializeWalletAction {
    type: WalletActionTypes.INITIALIZE_WALLET,
    payload: any[]
}

interface SetCurrentWalletPriceAction {
    type: WalletActionTypes.SET_CURRENT_WALLET_PRICE,
    payload: number
}


export type WalletAction = AddCurrencyAction | GetInitialWalletPriceAction | SetModalVisibleAction |
    SetModalInvisibleAction | InitializeWalletAction | DeleteCurrencyAction | SetCurrentWalletPriceAction
