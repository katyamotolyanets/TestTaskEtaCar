import React, {useEffect, useState} from 'react';
import axios from "axios";

const Header = () => {
    const [topCurrencies, setTopCurrencies] = useState([])
    useEffect(() => {
        axios.get('/assets?limit=3')
            .then(({data}) => setTopCurrencies(data.data))
    }, [])
    return (
        <header>
            <div className='top-currencies-container'>
                {topCurrencies.map(({id, symbol, priceUsd}) => (
                    <p key={id}>{symbol} = {Number(priceUsd).toFixed(2)}$</p>
                ))}
            </div>
            <div>Wallet cost</div>
            <div>Difference (percent%)</div>
        </header>
    );
};

export default Header;