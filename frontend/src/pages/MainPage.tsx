import React, {useEffect} from 'react';

import TableElement from "../components/main/TableElement";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import Table from "../components/table/Table";
import MainContainer from "../components/main/MainContainer";

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
        <MainContainer>
            <Table firstParam='Name' secondParam='Changes' thirdParam='Price' fourthParam='Add to wallet'>
                {currencies?.map(({id, name, changePercent24Hr, priceUsd}: CurrencyType) => {
                    return <TableElement id={id}
                                         name={name}
                                         changePercentDay={changePercent24Hr}
                                         priceUsd={priceUsd}/>
                })}
            </Table>
        </MainContainer>
    );
};

export default MainPage;