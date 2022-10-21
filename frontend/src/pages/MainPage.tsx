import React, {useEffect, useState} from 'react';
import TableElement from "../components/main/TableElement";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {trpc} from "../trpc";
import Table from "../components/table/Table";
import MainContainer from "../components/main/MainContainer";

const ITEMS_PER_PAGE = 25;

const MainPage: React.FC = () => {
    const {fetchCurrentCurrencies} = useActions();
    const {currentCurrenciesOnPage} = useTypedSelector(state => state.currencies);
    const [offset, setOffset] = useState(0);
    const {data: currentCurrencies, isLoading} = trpc.useQuery(['getLimitCurrenciesWithOffset',
        {limit: ITEMS_PER_PAGE, offset: offset}]);

    useEffect(() => {
        fetchCurrentCurrencies(currentCurrencies);
    }, [offset, isLoading]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, [offset]);

    const scrollHandler = () => {
        if (document.documentElement.scrollHeight -
            (document.documentElement.scrollTop + window.innerHeight) < 100) {
            setOffset(offset + ITEMS_PER_PAGE);
        }
    };

    return (
        <MainContainer>
            <Table firstParam='Name' secondParam='Changes' thirdParam='Price' fourthParam='Add to wallet'>
                {
                    currentCurrenciesOnPage?.map(({id, name, changePercent24Hr, priceUsd}) => {
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