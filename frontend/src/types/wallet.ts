export interface WalletType {
    id: string,
    name: string,
    changePercent24Hr: string,
    priceUsd: string
}

export interface WalletState {
    currencies: any[],
    loading: boolean,
    visible: boolean
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

interface GetInitialWalletPrice {
    type: WalletActionTypes.GET_INITIAL_WALLET_PRICE
}

interface SetModalVisible {
    type: WalletActionTypes.SET_MODAL_VISIBLE
}

interface SetModalInvisible {
    type: WalletActionTypes.SET_MODAL_INVISIBLE
}

interface InitializeWallet {
    type: WalletActionTypes.INITIALIZE_WALLET,
    payload: any[]
}


export type WalletAction = AddCurrencyAction | GetInitialWalletPrice | SetModalVisible |
    SetModalInvisible | InitializeWallet | DeleteCurrencyAction