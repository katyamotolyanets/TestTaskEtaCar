import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {formatStringToNumber} from "../../services/service";
import {useActions} from "../../hooks/useActions";
import Header from "./Header";

interface WalletCurrencyParameters {
    id: string,
    count: number
}

const Navbar: React.FC = () => {
    const {setWalletModalVisible} = useActions();
    const {currencies} = useTypedSelector(state => state.currencies);
    const walletCurrencies = JSON.parse(localStorage.getItem('wallet') as string)
    const initialWalletPrice = JSON.parse(localStorage.getItem('initialWalletPrice') as string)
    let walletCurrentPrice = 0

    walletCurrencies.forEach(({id, count}: WalletCurrencyParameters) => {
        let foundCurrency = currencies.find(element => element.id === id);
        walletCurrentPrice += (Number(foundCurrency?.priceUsd) * count);
    })

    let difference = walletCurrentPrice - initialWalletPrice
    let differenceInPercent = formatStringToNumber(((difference / walletCurrentPrice) * 100).toString())

    const handleClickShowModal = () => {
        setWalletModalVisible()
    }

    return (
        <Header topCurrencies={currencies.slice(0, 3).map(({id, symbol, priceUsd}) => (
            <p key={id}>{symbol} = {formatStringToNumber(priceUsd)}$</p>
        ))}>
            <div className='top-currencies-container'>
            </div>
            <div>Wallet price = {formatStringToNumber(walletCurrentPrice.toString())}$</div>
            <div>{difference > 0 ? '+' : ''}{formatStringToNumber(difference.toString())}$ ({differenceInPercent}%)</div>
            <button onClick={handleClickShowModal}>Wallet</button>
        </Header>
    );
};

export default Navbar;