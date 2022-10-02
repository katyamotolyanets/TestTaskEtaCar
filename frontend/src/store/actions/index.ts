import * as CurrencyActionCreators from './currencies'
import * as WalletActionCreators from './wallet'
import * as CurrencyDetailActionCreator from './currencyDetail'

export default {
    ...CurrencyActionCreators,
    ...WalletActionCreators,
    ...CurrencyDetailActionCreator
}