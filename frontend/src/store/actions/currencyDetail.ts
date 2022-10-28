import { Dispatch } from 'redux';
import {
  CurrencyDetailAction,
  CurrencyDetailActionTypes,
  CurrencyDetailType,
} from '../../types/currencyDetail';

export const fetchCurrencyData = (data: CurrencyDetailType) => {
  return async (dispatch: Dispatch<CurrencyDetailAction>) => {
    dispatch({ type: CurrencyDetailActionTypes.FETCH_CURRENCY, payload: data });
  };
};

export const fetchCurrencyHistory = (data: void[]) => {
  return async (dispatch: Dispatch<CurrencyDetailAction>) => {
    dispatch({
      type: CurrencyDetailActionTypes.FETCH_CURRENCY_HISTORY,
      payload: data,
    });
  };
};
