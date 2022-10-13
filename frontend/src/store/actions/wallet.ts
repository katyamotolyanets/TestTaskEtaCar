import {Dispatch} from "redux";
import {WalletAction, WalletActionTypes} from "../../types/wallet";

const wallet = JSON.parse(localStorage.getItem('wallet') as string) || [];

type WalletCurrencyParameters = {
    id: string,
    count: number
}

export const addCurrencyToWallet = (id: string, priceUsd: string , count: number) => {
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
        if (!localStorage.getItem('wallet'))
            localStorage.setItem('wallet', JSON.stringify([]));
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

export const setCurrentWalletPrice = () => {
    return async (dispatch: Dispatch<WalletAction>) => {
        const wallet = JSON.parse(localStorage.getItem('wallet') as string) || [];
        const currencies = JSON.parse(localStorage.getItem('currencies') as string) || [];
        let newWalletPrice = 0;
        await wallet?.forEach(({id, count}: WalletCurrencyParameters) => {
            if (currencies.length > 0) {
                let foundCurrency = currencies.find((element: WalletCurrencyParameters) => element.id === id);
                newWalletPrice += (Number(foundCurrency?.priceUsd) * count);
            }
        })
        await dispatch({type: WalletActionTypes.SET_CURRENT_WALLET_PRICE, payload: newWalletPrice})
    }
}
