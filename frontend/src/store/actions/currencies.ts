import axios from "axios";
import {Dispatch} from "redux";
import {CurrenciesActionTypes, CurrencyAction} from "../../types/currency";

interface WalletParams {
    id: string;
}

export const fetchWalletCurrenciesData = () => {
    return async (dispatch: Dispatch<CurrencyAction>) => {
        try {
            dispatch({type: CurrenciesActionTypes.FETCH_CURRENCIES});
            let result: any[];
            result = [];
            const wallet = await JSON.parse(localStorage.getItem('wallet') as string) || [];
            await wallet.forEach(({id}: WalletParams) => {
                axios.get(`/assets/${id}`)
                    .then(({data}) => {
                        if (!result.find(item => item.id == data.data.id))
                            result.push(data.data)
                    })
            })
            await axios.get(`/assets?limit=3`)
                .then(({data}) => {
                    data?.data?.forEach((item: {}) => result.push(item))
                })
            result = result.sort((previous, current) => previous.rank - current.rank)
            await dispatch({type: CurrenciesActionTypes.INITIALIZE_CURRENCIES, payload: result})
        } catch (error) {
            dispatch({type: CurrenciesActionTypes.FETCH_CURRENCIES_FAILED, payload: 'Cannot get data'})
        }
    }
}

export const fetchCurrentCurrencies = (limit: number, offset: number) => {
    return async (dispatch: Dispatch<CurrencyAction>) => {
        try {
            dispatch({type: CurrenciesActionTypes.FETCH_CURRENCIES})
            const response = await axios.get(`/assets?limit=${limit}&offset=${offset}`)
            dispatch({type: CurrenciesActionTypes.FETCH_CURRENT_CURRENCIES_SUCCESS, payload: response.data.data})

        } catch (error) {
            dispatch({type: CurrenciesActionTypes.FETCH_CURRENCIES_FAILED, payload: 'Cannot get data'})
        }
    }
}

export const setCurrentCurrency = (id: string, priceUsd: string) => {
    return async (dispatch: Dispatch<CurrencyAction>) => {
        const currentCurrency = {
            id: id,
            priceUsd: priceUsd
        }
        localStorage.setItem('currentCurrency', id);
        dispatch({type: CurrenciesActionTypes.SET_CURRENT_CURRENCY, payload: currentCurrency})
    }
}