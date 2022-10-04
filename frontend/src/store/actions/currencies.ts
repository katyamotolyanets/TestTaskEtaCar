import axios from "axios";
import {Dispatch} from "redux";
import {CurrenciesActionTypes, CurrencyAction} from "../../types/currency";

export const fetchCurrenciesData = () => {
    return async (dispatch: Dispatch<CurrencyAction>) => {
        try {
            dispatch({type: CurrenciesActionTypes.FETCH_CURRENCIES})
            const response = await axios.get('/assets')
            dispatch({type: CurrenciesActionTypes.INITIALIZE_CURRENCIES, payload: response.data.data})
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