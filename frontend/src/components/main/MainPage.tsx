import React, {useEffect} from 'react';

import TableElement from "./TableElement";
import {fetchCurrenciesData} from "../../store/actions/currencies";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

interface CurrencyType {
    id: string,
    name: string,
    changePercent24Hr: string,
    priceUsd: string
}

const MainPage: React.FC = () => {
    const {fetchCurrenciesData} = useActions();
    const {currencies} = useTypedSelector(state => state.currencies);

    useEffect(() => {
        fetchCurrenciesData()
    }, []);

    return (
        <div className='main-container'>
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
        </div>
    );
};

export default MainPage;