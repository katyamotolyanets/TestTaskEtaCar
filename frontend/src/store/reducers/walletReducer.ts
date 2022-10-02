import {WalletAction, WalletActionTypes, WalletCurrencyInfo, WalletState} from '../../types/wallet';

const initialState: WalletState = {
    currencies: [],
    loading: false,
    visible: false
};

const wallet = JSON.parse(localStorage.getItem('wallet') as string) || [];

export const walletReducer = (state = initialState, action: WalletAction): WalletState => {
    switch (action.type) {
        case WalletActionTypes.ADD_CURRENCY:
            wallet.push(action.payload);
            localStorage.setItem('wallet', JSON.stringify(wallet));
            return {
                ...state,
                currencies: [...state.currencies, action.payload],
                loading: false,
            };
        case WalletActionTypes.DELETE_CURRENCY:
            let elementsToDelete = wallet.filter(({id}: WalletCurrencyInfo) => id === action.payload);
            elementsToDelete.forEach((element: WalletCurrencyInfo) => {
                wallet.splice(wallet.indexOf(element), 1);
            })
            localStorage.setItem('wallet', JSON.stringify(wallet));
            return {
                ...state,
                currencies: wallet
            }
        case WalletActionTypes.GET_INITIAL_WALLET_PRICE:
            let initialWalletPrice = 0;
            wallet.reduce((previousItem: WalletCurrencyInfo, currentItem: WalletCurrencyInfo) => {
                initialWalletPrice += (Number(previousItem.price) * previousItem.count)
                    + (Number(currentItem.price) * currentItem.count);
                return previousItem;
            });
            localStorage.setItem('initialWalletPrice', initialWalletPrice.toString());
            return {
                ...state
            };
        case WalletActionTypes.SET_MODAL_VISIBLE:
            return {
                ...state,
                visible: true
            };
        case WalletActionTypes.SET_MODAL_INVISIBLE:
            return {
                ...state,
                visible: false
            }
        case WalletActionTypes.INITIALIZE_WALLET:
            return {
                ...state,
                currencies: action.payload
            }
        default:
            return state;
    }
};

