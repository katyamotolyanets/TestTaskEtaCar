import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router";
import {CartesianGrid, Line, LineChart, Tooltip, XAxis} from 'recharts';
import {formatStringToDate, formatStringToNumber} from "../../services/service";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

const DetailPage: React.FC = () => {
    const {id} = useParams()
    const {fetchCurrencyData, fetchCurrencyHistory, setCurrentCurrency} = useActions()

    useEffect(() => {
        fetchCurrencyData(id)
        fetchCurrencyHistory(id)
    }, [id])

    const {currency, history} = useTypedSelector(state => state.currency)

    const {
        rank,
        name,
        symbol,
        priceUsd,
        supply,
        maxSupply,
        marketCapUsd,
        vwap24Hr
    } = currency

    const navigate = useNavigate();

    const handleClickBackToMainPage = () => {
        navigate('/');
    };

    const handleClickBuyCurrency = () => {
        if (id != null && priceUsd != null)
            setCurrentCurrency(id, priceUsd)
    };

    return (
        <div className='detail-page-container'>
            <h2>{name} ({symbol})</h2>
            <div className='detail-page-info'>
                <div>Rank: {rank}</div>
                <div>Price: {formatStringToNumber(priceUsd)}$</div>
                <div>Available supply: {formatStringToNumber(supply)}</div>
                <div>Total quantity of asset issued: {formatStringToNumber(maxSupply)}</div>
                <div>Quantity of trading volume represented in
                    USD over the last 24 hours: {formatStringToNumber(marketCapUsd)}$</div>
                <div>Average Price in the last 24 hours: {formatStringToNumber(vwap24Hr)}$</div>
                <button onClick={handleClickBuyCurrency}>Add to wallet</button>
                <button onClick={handleClickBackToMainPage}>Back to main</button>
                <LineChart
                    width={1000}
                    height={500}
                    data={history}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                    className='line-chart'
                >
                    <XAxis dataKey="date" tickFormatter={formatStringToDate}/>
                    <Tooltip />
                    <CartesianGrid stroke="#ccd2ff" />
                    <Line type="monotone" dataKey="priceUsd" stroke="#808eff" yAxisId={0} />
                </LineChart>
            </div>
        </div>
    );
};

export default DetailPage;