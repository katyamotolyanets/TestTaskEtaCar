import {CurrencyDetailAction, CurrencyDetailActionTypes, CurrencyDetailState} from "../../types/currencyDetail";

const initialState: CurrencyDetailState = {
    currency: {
        rank:  null,
        name: null,
        symbol: null,
        priceUsd: null,
        supply: null,
        maxSupply: null,
        marketCapUsd: null,
        vwap24Hr: null
    },
    history: []
}

export const currencyDetailReducer = (state = initialState, action: CurrencyDetailAction): CurrencyDetailState => {
    switch (action.type) {
        case CurrencyDetailActionTypes.FETCH_CURRENCY:
            return {
                ...state,
                currency: action.payload
            }
        case CurrencyDetailActionTypes.FETCH_CURRENCY_HISTORY:
            return {
                ...state,
                history: action.payload
            }
        default:
            return state
    }
}

