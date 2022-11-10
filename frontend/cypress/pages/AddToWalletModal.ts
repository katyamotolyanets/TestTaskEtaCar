/// <reference types="cypress" />
// @ts-check
class AddToWalletModal {
    elements = {
        countOfCurrencyInput: () => cy.get('form').find('input'),
        addToWalletButton: () => cy.get('form').find('button').contains('Add to wallet'),
    }

    addCurrencyToWallet(countOfCurrency: string) {
        this.elements.countOfCurrencyInput().type(countOfCurrency);
        this.elements.addToWalletButton().click();
    }
}

export default AddToWalletModal;