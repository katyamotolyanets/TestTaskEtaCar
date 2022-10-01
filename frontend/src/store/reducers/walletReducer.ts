import {WalletAction, WalletActionTypes, WalletCurrencyInfo, WalletState} from "../../types/wallet";

const initialState: WalletState = {
    currencies: [],
    loading: false,
    error: null
}

export const walletReducer = (state = initialState, action: WalletAction): WalletState => {
    switch (action.type) {
        case WalletActionTypes.ADD_CURRENCY:
            return {
                ...state,
                loading: true,
                error: null
            }
        case WalletActionTypes.ADD_CURRENCY_SUCCESS:
            const currencies = JSON.parse(localStorage.getItem('wallet') as string) || []
            currencies.push(action.payload)
            localStorage.setItem('wallet', JSON.stringify(currencies));
            return {
                ...state,
                currencies: [...state.currencies, action.payload],
                loading: false,
                error: null
            }
        case WalletActionTypes.ADD_CURRENCY_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case WalletActionTypes.GET_INITIAL_WALLET_PRICE:
            const wallet = JSON.parse(localStorage.getItem('wallet') as string)
            let initialWalletPrice = 0
            wallet.reduce((a: WalletCurrencyInfo, b: WalletCurrencyInfo) => {
                initialWalletPrice = (Number(a.price) * a.count) + (Number(b.price) * b.count)
                return a
            })
            localStorage.setItem('initialWalletPrice', initialWalletPrice.toString())
            return {
                ...state
            }
        default:
            return state
    }
}

