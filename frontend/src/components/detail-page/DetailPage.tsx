import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import axios from "axios";
import {CartesianGrid, Line, LineChart, Tooltip, XAxis} from 'recharts';
import {formatStringToDate, formatStringToNumber} from "../../services/service";

const DetailPage: React.FC = () => {
    const {id} = useParams()
    const [currentCurrency, setCurrentCurrency] = useState({
        rank: '',
        name: '',
        symbol: '',
        priceUsd: '',
        supply: '',
        maxSupply: '',
        marketCapUsd: '',
        vwap24Hr: ''
    })
    const [currencyHistory, setCurrencyHistory] = useState([])
    const {
        rank,
        name,
        symbol,
        priceUsd,
        supply,
        maxSupply,
        marketCapUsd,
        vwap24Hr
    } = currentCurrency

    useEffect(() => {
        axios.get(`/assets/${id}`)
            .then(({data}) => setCurrentCurrency(data.data))
    }, [id])

    useEffect(() => {
        axios.get(`/assets/${id}/history?interval=d1`)
            .then(({data}) => setCurrencyHistory(data.data))
    }, [id])

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
                <button>Add to wallet</button>
                <LineChart
                    width={1000}
                    height={500}
                    data={currencyHistory}
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