import { Dispatch } from 'redux';
import {
  CurrenciesActionTypes,
  CurrencyAction,
  CurrencyType,
} from '../../types/currency';

export const addToCurrencies = (
  id: string,
  name: string,
  price: string,
  changePercentDay: string,
) => {
  return async (dispatch: Dispatch<CurrencyAction>) => {
    const currency: CurrencyType = {
      id,
      name,
      priceUsd: price,
      changePercent24Hr: changePercentDay,
    };
    dispatch({
      type: CurrenciesActionTypes.ADD_TO_CURRENCIES,
      payload: currency,
    });
  };
};

export const fetchWalletCurrenciesData = (
  topCurrencies: CurrencyType[],
  currencies: CurrencyType[],
) => {
  return async (dispatch: Dispatch<CurrencyAction>) => {
    try {
      const result: CurrencyType[] = [...topCurrencies, ...currencies];
      dispatch({
        type: CurrenciesActionTypes.INITIALIZE_CURRENCIES,
        payload: result,
      });
      localStorage.setItem('currencies', JSON.stringify(result));
    } catch (error) {
      dispatch({
        type: CurrenciesActionTypes.FETCH_CURRENCIES_FAILED,
        payload: 'Cannot get data',
      });
    }
  };
};

export const fetchCurrentCurrencies = (data: CurrencyType[]) => {
  return async (dispatch: Dispatch<CurrencyAction>) => {
    try {
      dispatch({
        type: CurrenciesActionTypes.FETCH_CURRENT_CURRENCIES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CurrenciesActionTypes.FETCH_CURRENCIES_FAILED,
        payload: 'Cannot get data',
      });
    }
  };
};

export const setCurrentCurrency = (id: string, priceUsd: string) => {
  return async (dispatch: Dispatch<CurrencyAction>) => {
    const currentCurrency = {
      id,
      priceUsd,
    };
    localStorage.setItem('currentCurrency', id);
    dispatch({
      type: CurrenciesActionTypes.SET_CURRENT_CURRENCY,
      payload: currentCurrency,
    });
  };
};
