import React, {useEffect, useState} from 'react';
import axios from "axios";

import TableElement from "./TableElement";
import WalletModal from "../wallet-modal-window/WalletModal";
import AddItemToWalletModal from "../add-item-to-wallet-modal/AddItemToWalletModal";

const MainPage = () => {
    const [elements, setElements] = useState([])
    const [walletModalActive, setWalletModalActive] = useState(false)
    const [itemToWalletModalActive, setItemToWalletModalActive] = useState(false)

    useEffect(() => {
        axios.get( '/assets')
            .then(({data}) => setElements(data.data))
    }, [])

    return (
        <div className='main-container'>
            <WalletModal active={walletModalActive} setActive={setWalletModalActive}/>
            <AddItemToWalletModal active={itemToWalletModalActive}
                                  setActive={setItemToWalletModalActive}/>
            <table>
                <tbody className='table'>
                    <tr className='table-row'>
                        <td>Name</td>
                        <td>Changes</td>
                        <td>Price</td>
                        <td>Add to wallet</td>
                    </tr>
                    {elements?.map(({id, name, changePercent24Hr, priceUsd}) => {
                        return <TableElement id={id}
                                             name={name}
                                             changePercentDay={changePercent24Hr}
                                             priceUsd={priceUsd}
                                             setActive={setItemToWalletModalActive}/>
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default MainPage;