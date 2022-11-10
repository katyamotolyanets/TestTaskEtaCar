/// <reference types="cypress" />
// @ts-check
import WalletModal from "./WalletModal";
import AddToWalletModal from "./AddToWalletModal";

class MainPage {
    public addToWalletModal: AddToWalletModal;
    public walletModal: WalletModal;

    constructor() {
        this.walletModal = new WalletModal();
        this.addToWalletModal = new AddToWalletModal();
    }

    elements = {
        addToWalletModal: () => cy.get('div.modal__content'),
        buyCurrencyButton: (name) => cy.get(`[data-cy="${name}"]`).find('button'),
    }

    visit() {
        cy.visit('/')
    }

    clickBuyCurrencyButton(name: string) {
        this.elements.buyCurrencyButton(name).click();
    }

    closeModalByEscape() {
        cy.document().trigger('keydown', { keyCode: 27});
    }
}

export default MainPage;