import {combineReducers} from "redux";
import {currencyReducer} from "./currencyReducer";
import {walletReducer} from "./walletReducer";


export const rootReducer = combineReducers({
    currencies: currencyReducer,
    wallet: walletReducer
})

export type RootState = ReturnType<typeof rootReducer>