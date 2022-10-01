import * as CurrencyActionCreators from './currency'
import * as WalletActionCreators from './wallet'

export default {
    ...CurrencyActionCreators,
    ...WalletActionCreators
}