/// <reference types="cypress" />
// @ts-check
class WalletModal {
    elements = {
        walletButton: () => cy.contains('My wallet'),
        walletItem: (name) => cy.get(`[data-cy="${name}-wallet"]`),
        countOfCurrencyInWallet: (name) => cy.get(`[data-cy="${name}-wallet"`).find('td.count-of-currencies'),
        deleteCurrencyFromWalletButton: (name) => cy.get(`[data-cy="${name}-wallet"`).find('button'),
        confirmDeleteCurrencyButton: () => cy.get('[data-cy="confirm-modal"]').find('button').contains('Yes'),
        cancelDeleteCurrencyButton: () => cy.get('[data-cy="confirm-modal"]').find('button').contains('Cancel'),
    }

    openWalletModal() {
        this.elements.walletButton().click();
    }

    confirmDeleteCurrency(name: string) {
        this.elements.deleteCurrencyFromWalletButton(name).click();
        this.elements.confirmDeleteCurrencyButton().click();
    }

    cancelDeleteCurrency(name: string) {
        this.elements.deleteCurrencyFromWalletButton(name).click();
        this.elements.cancelDeleteCurrencyButton().click();
    }
}

export default WalletModal;