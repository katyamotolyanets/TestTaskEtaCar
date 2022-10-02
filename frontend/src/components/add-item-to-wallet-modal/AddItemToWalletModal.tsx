import React, {useState} from 'react';
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {formatStringToNumber} from "../../services/service";

const AddItemToWalletModal = () => {
    const {setCurrentCurrency, addCurrencyToWallet} = useActions();
    const [countOfCurrency, setCountOfCurrency] = useState('');
    const {currentCurrency} = useTypedSelector(state => state.currencies);
    const {id, priceUsd} = currentCurrency;

    const handleChangeCountOfCurrency = (event: React.FormEvent<HTMLInputElement>) => {
        setCountOfCurrency(event.currentTarget.value);
    };

    const handleClickAddToWallet = () => {
        addCurrencyToWallet(id, priceUsd, Number(formatStringToNumber(countOfCurrency)));
        setCurrentCurrency('', '')
        setCountOfCurrency('')
    };

    return (
        <div>
            <div className={currentCurrency.id ? 'modal active' : 'modal'}
                 onClick={() => setCurrentCurrency('', '')}>
                <div className='modal__content' onClick={e => e.stopPropagation()}>
                    <input type="text" value={countOfCurrency} onChange={handleChangeCountOfCurrency}/>
                    <button onClick={handleClickAddToWallet}>Add to wallet</button>
                </div>
            </div>
        </div>
    );
};

export default AddItemToWalletModal;