import axios from "axios";
import {Dispatch} from "redux";
import {CurrenciesActionTypes, CurrencyAction, CurrencyType} from "../../types/currency";

export const addToCurrencies = (id: string) => {
    return async (dispatch: Dispatch<CurrencyAction>) => {
        let result: CurrencyType[] = [];
        let promises = [];
        promises.push(
            axios.get(`/assets/${id}`).then(response => {
                result.push(response.data.data);
            })
        );
        Promise.all(promises).then(() => {
            dispatch({type: CurrenciesActionTypes.ADD_TO_CURRENCIES, payload: result})
        });    }
}

export const fetchWalletCurrenciesData = () => {
    return async (dispatch: Dispatch<CurrencyAction>) => {
        try {
            const wallet = JSON.parse(localStorage.getItem('wallet') as string) || [];
            let result: CurrencyType[] = [];
            let promises = [];
            promises.push(axios.get(`/assets?limit=3`)
                .then(({data}) => {
                    data?.data?.forEach((item: CurrencyType) => result.push(item))
                }))
            for (let element of wallet) {
                promises.push(
                    axios.get(`/assets/${element.id}`).then(response => {
                        result.push(response.data.data);
                    })
                )
            }
            Promise.all(promises).then(() => {
                dispatch({type: CurrenciesActionTypes.INITIALIZE_CURRENCIES, payload: result})
                localStorage.setItem('currencies', JSON.stringify(result))
            });
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