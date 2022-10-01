import React from 'react';
import {Link} from "react-router-dom";
import {formatStringToNumber} from "../../services/service";
import {useActions} from "../../hooks/useActions";

export interface ElementComponentProps {
    id: string
    name: string,
    changePercentDay: string,
    priceUsd: string,
}

const TableElement = ({id, name, changePercentDay, priceUsd}: ElementComponentProps) => {
    const {setCurrentCurrency} = useActions();

    const handleClickBuyCurrency = () => {
        setCurrentCurrency(id, priceUsd)
    };

    return (
        <tr key={id} className='table-row'>
            <td><Link to={{pathname:`/currency/${id}`}}>{name}</Link></td>
            <td><Link to={{pathname:`/currency/${id}`}}>{formatStringToNumber(changePercentDay)}</Link></td>
            <td><Link to={{pathname:`/currency/${id}`}}>{formatStringToNumber(priceUsd)}</Link></td>
            <td>
                <button onClick={handleClickBuyCurrency}>Buy</button>
            </td>
        </tr>
    );
};

export default TableElement;