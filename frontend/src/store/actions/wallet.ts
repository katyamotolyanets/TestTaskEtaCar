import {Dispatch} from "redux";
import {WalletAction, WalletActionTypes} from "../../types/wallet";

export const addCurrencyToWallet = (id: string | null, priceUsd: string | null, count: number) => {
    return async (dispatch: Dispatch<WalletAction>) => {
        dispatch({type: WalletActionTypes.ADD_CURRENCY})
        const currencyInfo = {
            id: id,
            price: priceUsd,
            count: count,
        }
        dispatch({type: WalletActionTypes.ADD_CURRENCY_SUCCESS, payload: currencyInfo})
    }
}
export const costOfWallet = () => {
    return async (dispatch: Dispatch<WalletAction>) => {
        dispatch({type: WalletActionTypes.GET_INITIAL_WALLET_PRICE})
    }
}
