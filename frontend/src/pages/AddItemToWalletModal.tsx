import React, {useState} from 'react';
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {formatStringToNumber} from "../services/service";
import Modal from "../components/modal/Modal";
import Input from "../components/inputs/Input";
import Button from "../components/buttons/Button";

const AddItemToWalletModal = () => {
    const {setCurrentCurrency, addCurrencyToWallet} = useActions();
    const [countOfCurrency, setCountOfCurrency] = useState<string | null>(null);
    const {currentCurrency} = useTypedSelector(state => state.currencies);
    const {id, priceUsd} = currentCurrency;

    const handleChangeCountOfCurrency = (event: React.FormEvent<HTMLInputElement>) => {
        if (event.currentTarget.value.match(/^\d+\.?\d*$/))
            setCountOfCurrency(event.currentTarget.value);
    };

    const handleClickAddToWallet = () => {
        addCurrencyToWallet(id, priceUsd, Number(formatStringToNumber(countOfCurrency)));
        setCurrentCurrency('', '')
        setCountOfCurrency(null)
    };

    return (
        <Modal isActive={currentCurrency.id} handleClickHideModal={() => setCurrentCurrency('', '')}>
            <h2>{currentCurrency.id}</h2>
            <div>
                <Input value={countOfCurrency} handleChange={handleChangeCountOfCurrency}/>
                <Button onClick={handleClickAddToWallet}>Add to wallet</Button>
            </div>
        </Modal>

    );
};

export default AddItemToWalletModal;