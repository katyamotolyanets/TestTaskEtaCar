import {Dispatch} from "redux";
import {WalletAction, WalletActionTypes, WalletCurrencyInfo} from "../../types/wallet";

interface t {
    id: string,
    price: string,
    count: number
}

export const addCurrencyToWallet = (id: string | null, priceUsd: string | null, count: number) => {
    return async (dispatch: Dispatch<WalletAction>) => {
        const currencyInfo = {
            id: id,
            price: priceUsd,
            count: count,
        }
        dispatch({type: WalletActionTypes.ADD_CURRENCY, payload: currencyInfo})
    }
}

export const deleteCurrencyFromWallet = (id: string) => {
    return async (dispatch: Dispatch<WalletAction>) => {
        dispatch({type: WalletActionTypes.DELETE_CURRENCY, payload: id})
    }
}

export const initializeWallet = () => {
    return async (dispatch: Dispatch<WalletAction>) => {
        const wallet = JSON.parse(localStorage.getItem('wallet') as string) || [];
        dispatch({type: WalletActionTypes.INITIALIZE_WALLET, payload: wallet})
    }
}

export const calculateInitialWalletPrice = () => {
    return async (dispatch: Dispatch<WalletAction>) => {
        dispatch({type: WalletActionTypes.GET_INITIAL_WALLET_PRICE})
    }
}

export const setWalletModalInvisible = () => {
    return async (dispatch: Dispatch<WalletAction>) => {
        dispatch({type: WalletActionTypes.SET_MODAL_INVISIBLE})
    }
}

export const setWalletModalVisible = () => {
    return async (dispatch: Dispatch<WalletAction>) => {
        dispatch({type: WalletActionTypes.SET_MODAL_VISIBLE})
    }
}
