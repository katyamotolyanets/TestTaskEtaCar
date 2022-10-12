import React from 'react';
import {Link} from "react-router-dom";
import {formatStringToNumber} from "../../services/service";
import {useActions} from "../../hooks/useActions";
import Button from "../buttons/Button";
import {StyledTd, StyledTr} from "../table/Table";

export interface ElementComponentProps {
    id: string
    name: string,
    changePercentDay: string,
    priceUsd: string,
}

const TableElement = ({id, name, changePercentDay, priceUsd}: ElementComponentProps) => {
    const {setCurrentCurrency, addToCurrencies} = useActions();

    const handleClickBuyCurrency = () => {
        setCurrentCurrency(id, priceUsd)
        addToCurrencies(id);
    };

    return (
        <StyledTr key={id}>
            <StyledTd><Link to={{pathname:`/currency/${id}`}}>{name}</Link></StyledTd>
            <StyledTd><Link to={{pathname:`/currency/${id}`}}>{formatStringToNumber(changePercentDay)}</Link></StyledTd>
            <StyledTd><Link to={{pathname:`/currency/${id}`}}>{formatStringToNumber(priceUsd)}</Link></StyledTd>
            <StyledTd>
                <Button onClick={handleClickBuyCurrency}>Buy</Button>
            </StyledTd>
        </StyledTr>
    );
};

export default TableElement;