import React from 'react';
import { Link } from 'react-router-dom';
import { formatStringToNumber } from '../../utils/utilities';
import { useActions } from '../../hooks/useActions';
import Button from '../buttons/default/Button';
import { StyledTd, StyledTr } from '../table/style';

export type ElementComponentProps = {
  id: string;
  name: string;
  changePercentDay: string;
  priceUsd: string;
};

const TableElement = ({
  id,
  name,
  changePercentDay,
  priceUsd,
}: ElementComponentProps) => {
  const { setCurrentCurrency, addToCurrencies } = useActions();

  const handleClickBuyCurrency = async () => {
    setCurrentCurrency(id, priceUsd);
    addToCurrencies(id, name, changePercentDay, priceUsd);
  };

  return (
    <StyledTr key={id} data-cy={id}>
      <StyledTd>
        <Link to={{ pathname: `/currency/${id}` }}>{name}</Link>
      </StyledTd>
      <StyledTd>
        <Link to={{ pathname: `/currency/${id}` }}>
          {formatStringToNumber(changePercentDay)}
        </Link>
      </StyledTd>
      <StyledTd>
        <Link to={{ pathname: `/currency/${id}` }}>
          {formatStringToNumber(priceUsd)}
        </Link>
      </StyledTd>
      <StyledTd>
        <Button onClick={handleClickBuyCurrency} border={true}>
          Buy
        </Button>
      </StyledTd>
    </StyledTr>
  );
};

export default TableElement;
