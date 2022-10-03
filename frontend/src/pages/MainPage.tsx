import React, {useEffect, useState} from 'react';

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
};

const ITEMS_PER_PAGE = 25;

const MainPage: React.FC = () => {
    const {fetchCurrenciesData} = useActions();
    const {currencies} = useTypedSelector(state => state.currencies);
    const [currentPage, setCurrentPage] = useState(1);
    const lastItemIndex = currentPage * ITEMS_PER_PAGE;
    const currentItems = currencies.slice(0, lastItemIndex);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, [currentPage]);

    const scrollHandler = () => {
        if (document.documentElement.scrollHeight -
            (document.documentElement.scrollTop + window.innerHeight) < 100) {
            setCurrentPage(currentPage + 1);
        }
    };

    useEffect(() => {
        fetchCurrenciesData();
    }, []);

    return (
        <MainContainer>
            <Table firstParam='Name' secondParam='Changes' thirdParam='Price' fourthParam='Add to wallet'>
                {
                    currentItems?.map(({id, name, changePercent24Hr, priceUsd}: CurrencyType) => {
                        return <TableElement id={id}
                                         name={name}
                                         changePercentDay={changePercent24Hr}
                                         priceUsd={priceUsd}/>})
                }
            </Table>
        </MainContainer>
    );
};

export default MainPage;