import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {formatStringToNumber} from "../services/service";
import {useActions} from "../hooks/useActions";
import Header from "../components/header/Header";
import WalletButton from "../components/buttons/WalletButton";

interface WalletCurrencyParameters {
    id: string,
    count: number
}

const Navbar: React.FC = () => {
    const {setWalletModalVisible} = useActions();
    const {currencies} = useTypedSelector(state => state.currencies);
    const walletCurrencies = JSON.parse(localStorage.getItem('wallet') as string) || []
    const initialWalletPrice = JSON.parse(localStorage.getItem('initialWalletPrice') as string)
    let walletCurrentPrice = 0

    if (walletCurrencies?.length > 0) {
        walletCurrencies?.forEach(({id, count}: WalletCurrencyParameters) => {
            let foundCurrency = currencies?.find(element => element.id === id);
            walletCurrentPrice += (Number(foundCurrency?.priceUsd) * count);
        })
        localStorage.setItem('currentWalletPrice', walletCurrentPrice.toString());
    }

    let difference = walletCurrentPrice - initialWalletPrice
    let differenceInPercent = formatStringToNumber(((difference / walletCurrentPrice) * 100).toString())

    const handleClickShowModal = () => {
        setWalletModalVisible()
    }

    return (
        <Header topCurrencies={currencies.slice(0, 3).map(({id, symbol, priceUsd}) => (
                <p key={id}>{symbol} = {formatStringToNumber(priceUsd)} USD</p>))}>
            <div>Wallet price = {formatStringToNumber(walletCurrentPrice.toString() || '0')} USD</div>
            <div>{difference > 0 ? '+' : ''}{formatStringToNumber(difference.toString() || '0')} USD
                ({differenceInPercent || 0}%)</div>
            <WalletButton handleClick={handleClickShowModal}>My wallet</WalletButton>
        </Header>
    );
};

export default Navbar;