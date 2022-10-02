import {Dispatch} from "redux";
import axios from "axios";
import {CurrencyDetailAction, CurrencyDetailActionTypes} from "../../types/currencyDetail";

export const fetchCurrencyData = (id: string | null | undefined) => {
    return async (dispatch: Dispatch<CurrencyDetailAction>) => {
        const response = await axios.get(`/assets/${id}`)
        dispatch({type: CurrencyDetailActionTypes.FETCH_CURRENCY, payload: response.data.data})
    }
}

export const fetchCurrencyHistory = (id: string | null | undefined) => {
    return async (dispatch: Dispatch<CurrencyDetailAction>) => {
        const response = await axios.get(`/assets/${id}/history?interval=d1`)
        dispatch({type: CurrencyDetailActionTypes.FETCH_CURRENCY_HISTORY, payload: response.data.data})
    }
}