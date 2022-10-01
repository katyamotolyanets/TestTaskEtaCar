import React, {useEffect, useState} from 'react';

import TableElement from "./TableElement";
import WalletModal from "../wallet-modal-window/WalletModal";
import AddItemToWalletModal from "../add-item-to-wallet-modal/AddItemToWalletModal";
import {fetchCurrenciesData} from "../../store/actions/currency";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {CurrencyType} from "../../types/currency";

const MainPage: React.FC = () => {
    const {fetchCurrenciesData} = useActions();
    const {currencies} = useTypedSelector(state => state.currencies);
    const [walletModalActive, setWalletModalActive] = useState(false);

    useEffect(() => {
        fetchCurrenciesData()
    }, []);

    const onClick = () => {
        setWalletModalActive(true)
    };

    return (
        <div className='main-container'>

            <button onClick={onClick}>Wallet</button>
            <table>
                <tbody className='table'>
                    <tr className='table-row'>
                        <td>Name</td>
                        <td>Changes</td>
                        <td>Price</td>
                        <td>Add to wallet</td>
                    </tr>
                    {currencies?.map(({id, name, changePercent24Hr, priceUsd}: CurrencyType) => {
                        return <TableElement id={id}
                                             name={name}
                                             changePercentDay={changePercent24Hr}
                                             priceUsd={priceUsd}/>
                    })}
                </tbody>
            </table>
            <WalletModal active={walletModalActive} setActive={setWalletModalActive}/>
            <AddItemToWalletModal/>
        </div>
    );
};

export default MainPage;