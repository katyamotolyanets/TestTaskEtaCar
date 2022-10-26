import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {formatStringToNumber} from "../utils/utilities";
import {useActions} from "../hooks/useActions";
import Header from "../components/header/Header";
import WalletButton from "../components/buttons/WalletButton";
import {WalletCurrencyInfo} from "../types/wallet";
import {trpc} from "../trpc";
import {CurrencyType} from "../types/currency";

const Navbar: React.FC = () => {
    const {setWalletModalVisible, setCurrentWalletPrice, fetchWalletCurrenciesData} = useActions();
    const initialWalletPrice = JSON.parse(localStorage.getItem('initialWalletPrice') as string);
    const wallet: WalletCurrencyInfo[] = JSON.parse(localStorage.getItem('wallet') as string) || [];
    const {currentWalletPrice} = useTypedSelector(state => state.wallet);
    const topThreeCurrencies: CurrencyType[] = trpc
        .useQuery(['getLimitCurrenciesWithOffset', {limit: 3, offset: 0}]).data;
    const {data: currentCurrencies} = trpc.useQuery(['fetchCurrenciesFromArray', wallet]);

    useEffect(() => {
        fetchWalletCurrenciesData(topThreeCurrencies, currentCurrencies!) ;
        setCurrentWalletPrice();
    }, [])

    let difference = currentWalletPrice - Number(initialWalletPrice)
    let differenceInPercent = formatStringToNumber(((difference / currentWalletPrice) * 100).toString())

    const handleClickShowModal = () => {
        setWalletModalVisible();
    }

    return (
        <Header topCurrencies={topThreeCurrencies?.map(({id, symbol, priceUsd}) => (
                <p key={id}>{symbol} = {formatStringToNumber(priceUsd)} USD</p>))}>
            <div>Wallet price = {formatStringToNumber(currentWalletPrice.toString() || '0')} USD</div>
            <div>{difference > 0 ? '+' : ''}{formatStringToNumber(difference.toString() || '0')} USD
                ({differenceInPercent >= 100 ? '+100' : difference < 0 ? '-100' : 0}%)</div>
            <WalletButton handleClick={handleClickShowModal}>My wallet</WalletButton>
        </Header>
    );
};

export default Navbar;