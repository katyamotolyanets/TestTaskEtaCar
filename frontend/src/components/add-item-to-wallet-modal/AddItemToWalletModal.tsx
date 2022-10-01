import React, {useState} from 'react';
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {formatStringToNumber} from "../../services/service";

const AddItemToWalletModal = () => {
    const {setCurrentCurrency, addCurrencyToWallet} = useActions();
    const [countOfCurrency, setCountOfCurrency] = useState('');
    const {currentCurrency} = useTypedSelector(state => state.currencies);
    const {id, priceUsd} = currentCurrency;

    const onChangeCountOfCurrency = (event: React.FormEvent<HTMLInputElement>) => {
        setCountOfCurrency(event.currentTarget.value)
    };
    const onClickAdd = () => {
        addCurrencyToWallet(id, priceUsd, Number(formatStringToNumber(countOfCurrency)))
    };

    return (
        <div>
            <div className={currentCurrency.id ? 'modal active' : 'modal'} onClick={() => setCurrentCurrency('', '')}>
                <div className='modal__content' onClick={e => e.stopPropagation()}>
                    <input type="text" onChange={onChangeCountOfCurrency}/>

                    <button onClick={onClickAdd}>Add to wallet</button>

                </div>
            </div>
        </div>
    );
};

export default AddItemToWalletModal;