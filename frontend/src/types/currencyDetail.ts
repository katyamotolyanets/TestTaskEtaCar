export interface CurrencyDetailState {
    currency: {
        rank: string | null,
        name: string | null,
        symbol: string | null,
        priceUsd: string | null,
        supply: string | null,
        maxSupply: string | null,
        marketCapUsd: string | null,
        vwap24Hr: string | null
    },
    history: any[]
}

export enum CurrencyDetailActionTypes {
    FETCH_CURRENCY = 'FETCH_CURRENCY',
    FETCH_CURRENCY_HISTORY = 'FETCH_CURRENCY_HISTORY'
}

interface FetchCurrencyAction {
    type: CurrencyDetailActionTypes.FETCH_CURRENCY
    payload: {
        rank: string | null,
        name: string | null,
        symbol: string | null,
        priceUsd: string | null,
        supply: string | null,
        maxSupply: string | null,
        marketCapUsd: string | null,
        vwap24Hr: string | null
    }
}

interface FetchCurrencyHistoryAction {
    type: CurrencyDetailActionTypes.FETCH_CURRENCY_HISTORY
    payload: any[]
}

export type CurrencyDetailAction = FetchCurrencyAction | FetchCurrencyHistoryAction