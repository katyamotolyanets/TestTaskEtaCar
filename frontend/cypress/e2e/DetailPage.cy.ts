import MainPage from "../pages/MainPage";
import DetailPage from "../pages/DetailPage";

describe('E2E test for Detail page', () => {
    const detailPage = new DetailPage();
    let currencyName: string = undefined;
    let countOfCurrency: string = undefined;

    it('should add bitcoin to wallet from Detail page', () => {
        currencyName = 'bitcoin';
        countOfCurrency = '10';
        detailPage.visit(currencyName);
        detailPage.addToWalletCurrency(countOfCurrency);
        detailPage.walletModal.openWalletModal();
        detailPage.walletModal.elements.countOfCurrencyInWallet(currencyName).should('have.text', countOfCurrency)
        detailPage.visit(currencyName);
    })

    it('should correctly link to Main page', () => {
        const baseUrl: string = 'http://localhost:3000/';
        detailPage.backToMainPage();
        cy.url().should('eq', baseUrl)
    })
})
