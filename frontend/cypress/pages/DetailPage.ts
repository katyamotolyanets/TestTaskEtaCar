import AddToWalletModal from "./AddToWalletModal";
import WalletModal from "./WalletModal";
/// <reference types="cypress" />
// @ts-check
class DetailPage {
    public addToWalletModal: AddToWalletModal;
    public walletModal: WalletModal;

    constructor() {
        this.addToWalletModal = new AddToWalletModal();
        this.walletModal = new WalletModal();
    }

    elements = {
        addToWalletButton: () => cy.contains('Add to wallet'),
        backToMainPageButton: () => cy.contains('Back to main'),
    }

    visit(name) {
        cy.visit(`/currency/${name}`)
    }

    addToWalletCurrency(countOfCurrency: string) {
        this.elements.addToWalletButton().click();
        this.addToWalletModal.addCurrencyToWallet(countOfCurrency);
    }

    backToMainPage() {
        this.elements.backToMainPageButton().click();
    }
}

export default DetailPage;