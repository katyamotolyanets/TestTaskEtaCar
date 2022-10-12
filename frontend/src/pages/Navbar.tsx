import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {formatStringToNumber} from "../services/service";
import {useActions} from "../hooks/useActions";
import Header from "../components/header/Header";
import WalletButton from "../components/buttons/WalletButton";

const Navbar: React.FC = () => {
    const {setWalletModalVisible, setCurrentWalletPrice, fetchWalletCurrenciesData} = useActions();
    const {currencies} = useTypedSelector(state => state.currencies);
    const {currentWalletPrice} = useTypedSelector(state => state.wallet);
    const initialWalletPrice = JSON.parse(localStorage.getItem('initialWalletPrice') as string);

    const uniqueIds: string[] = [];
    const topCurrencies = currencies
        .filter(element => {
            const isDuplicate = uniqueIds.includes(element.id);
            if (!isDuplicate) {
                uniqueIds.push(element.id);
                return true;
            }
            return false;
        })
        .sort((previous, current) => Number(previous.rank) - Number(current.rank))
        .slice(0, 3);

    useEffect(() => {
        fetchWalletCurrenciesData() ;
        setCurrentWalletPrice();
    }, [])

    let difference = currentWalletPrice - Number(initialWalletPrice)
    let differenceInPercent = formatStringToNumber(((difference / currentWalletPrice) * 100).toString())

    const handleClickShowModal = () => {
        setWalletModalVisible()
    }

    return (
        <Header topCurrencies={topCurrencies.map(({id, symbol, priceUsd}) => (
                <p key={id}>{symbol} = {formatStringToNumber(priceUsd)} USD</p>))}>
            <div>Wallet price = {formatStringToNumber(currentWalletPrice.toString() || '0')} USD</div>
            <div>{difference > 0 ? '+' : ''}{formatStringToNumber(difference.toString() || '0')} USD
                ({differenceInPercent >= 100 ? '+100' : difference < 0 ? '-100' : 0}%)</div>
            <WalletButton handleClick={handleClickShowModal}>My wallet</WalletButton>
        </Header>
    );
};

export default Navbar;