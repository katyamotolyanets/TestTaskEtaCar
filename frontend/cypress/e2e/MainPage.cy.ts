import MainPage from '../pages/MainPage';
import AddToWalletModal from "../pages/AddToWalletModal";

describe('E2E tests for Main page', () => {
    const home = new MainPage();
    let countOfCurrency: string = undefined;
    let currencyName: string = undefined;

    beforeEach(() => {
        home.visit()
    });
    it('should show a modal window for adding currency to the wallet', () => {
        home.clickBuyCurrencyButton('bitcoin');
        home.elements.addToWalletModal().should('be.visible');
    })
    it('should add a currency to the wallet', () => {
        countOfCurrency = '5';
        currencyName = 'ethereum';
        home.clickBuyCurrencyButton(currencyName);
        home.addToWalletModal.addCurrencyToWallet(countOfCurrency);
        home.walletModal.openWalletModal();
        home.walletModal.elements.countOfCurrencyInWallet(currencyName).should('have.text', countOfCurrency)
        home.closeModalByEscape();
    })
    it('should hide modal by pressing the escape key', () => {
        currencyName = 'tether';
        home.clickBuyCurrencyButton(currencyName);
        home.closeModalByEscape();
        home.elements.addToWalletModal().should('not.exist');
    })
    it('should delete a currency from wallet', () => {
        countOfCurrency = '10';
        currencyName = 'tether';
        home.clickBuyCurrencyButton(currencyName);
        home.addToWalletModal.addCurrencyToWallet(countOfCurrency);
        home.walletModal.openWalletModal();
        home.walletModal.confirmDeleteCurrency(currencyName);
        home.walletModal.elements.walletItem(currencyName).should('not.exist');
    })
    it('should not delete a currency if cancel button is pressed in confirm modal', () => {
        countOfCurrency = '7';
        currencyName = 'xrp';
        home.clickBuyCurrencyButton(currencyName);
        home.addToWalletModal.addCurrencyToWallet(countOfCurrency);
        home.walletModal.openWalletModal();
        home.walletModal.cancelDeleteCurrency(currencyName);
        home.walletModal.elements.walletItem(currencyName).should('exist');
    })
})