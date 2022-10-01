import React, {Dispatch, SetStateAction} from 'react';
import {Link} from "react-router-dom";
import {formatStringToNumber} from "../../services/service";

export interface ElementComponentProps {
    id: string
    name: string,
    changePercentDay: string,
    priceUsd: string,
    setActive: Dispatch<SetStateAction<boolean>>
}

const TableElement = ({id, name, changePercentDay, priceUsd, setActive}: ElementComponentProps) => {
    return (
        <tr key={id} className='table-row'>
            <td><Link to={{pathname:`/currency/${id}`}}>{name}</Link></td>
            <td><Link to={{pathname:`/currency/${id}`}}>{formatStringToNumber(changePercentDay)}</Link></td>
            <td><Link to={{pathname:`/currency/${id}`}}>{formatStringToNumber(priceUsd)}</Link></td>
            <td>
                <button onClick={() => setActive(true)}>Buy</button>
            </td>
        </tr>
    );
};

export default TableElement;