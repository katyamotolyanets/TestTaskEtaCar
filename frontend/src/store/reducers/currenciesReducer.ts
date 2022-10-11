import {CurrenciesActionTypes, CurrencyAction, CurrencyState} from "../../types/currency";

const initialState: CurrencyState = {
    currencies: [],
    currentCurrency: {
        id: null,
        priceUsd: null
    },
    currentCurrenciesOnPage: [],
    loading: false,
    error: null
}

export const currenciesReducer = (state = initialState, action: CurrencyAction): CurrencyState => {
    switch (action.type) {
        case CurrenciesActionTypes.FETCH_CURRENCIES:
            return {
                ...state,
                currencies: [],
                loading: true,
                error: null
            }
        case CurrenciesActionTypes.FETCH_CURRENT_CURRENCIES_SUCCESS:
            return {
                ...state,
                currentCurrenciesOnPage: [...state.currentCurrenciesOnPage, ...action.payload],
                loading: false,
                error: null
            }
        case CurrenciesActionTypes.FETCH_CURRENCIES_FAILED:
            return {
                ...state,
                currencies: [],
                loading: false,
                error: action.payload
            }
        case CurrenciesActionTypes.INITIALIZE_CURRENCIES:
            console.log(action.payload)
            return {
                ...state,
                currencies: action.payload,
                loading: false,
                error: null
            }
        case CurrenciesActionTypes.SET_CURRENT_CURRENCY:
            return {
                ...state,
                currentCurrency: action.payload
            }
        default:
            return state
    }
}

