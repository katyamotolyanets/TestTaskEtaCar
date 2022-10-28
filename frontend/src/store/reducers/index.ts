import { combineReducers } from 'redux';
import { currenciesReducer } from './currenciesReducer';
import { walletReducer } from './walletReducer';
import { currencyDetailReducer } from './currencyDetailReducer';

export const rootReducer = combineReducers({
  currencies: currenciesReducer,
  wallet: walletReducer,
  currency: currencyDetailReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
