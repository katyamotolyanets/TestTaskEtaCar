import React, {FormEvent, useState} from 'react';
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Modal from "../components/modal/Modal";
import Input from "../components/inputs/Input";
import Button from "../components/buttons/Button";

const AddItemToWalletModal = () => {
    const {setCurrentCurrency, addCurrencyToWallet, setCurrentWalletPrice, fetchWalletCurrenciesData} = useActions();
    const [countOfCurrency, setCountOfCurrency] = useState<string | undefined>(undefined);
    const {currentCurrency} = useTypedSelector(state => state.currencies);
    const {id, priceUsd} = currentCurrency;

    const handleChangeCountOfCurrency = (event: React.FormEvent<HTMLInputElement>) => {
        setCountOfCurrency(event.currentTarget.value);
    };

    const handleSubmitAddToWallet = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (id != null && priceUsd != null) addCurrencyToWallet(id, priceUsd, Number(countOfCurrency));
        fetchWalletCurrenciesData();
        setCurrentWalletPrice();
        setCurrentCurrency('', '')
        setCountOfCurrency(undefined)
    };

    const handleClickHideModal = () => {
        setCurrentCurrency('', '')
    }

    return (
        <Modal isActive={currentCurrency.id} handleClickHideModal={handleClickHideModal}>
            <h2>{currentCurrency.id}</h2>
            <form onSubmit={handleSubmitAddToWallet}>
                <Input value={countOfCurrency} handleChange={handleChangeCountOfCurrency}/>
                <Button>Add to wallet</Button>
            </form>
        </Modal>

    );
};

export default AddItemToWalletModal;