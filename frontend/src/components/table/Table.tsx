import React from 'react';
import styled from "styled-components";

const StyledTable = styled.table`
  border-collapse: collapse;
`

export const StyledTd = styled.td`
    border-top: 0.01em solid #ccd2ff;
    position: relative;
    padding: 1% 1% 1% 2%;
`

export const StyledTr = styled.tr`
  &:first-child {
    td {
      border: none;

    }
  }
  &:hover,
  &:focus-within {
    background: #f2f3ff;
    outline: none;
  }`

interface TableComponentProps {
    children: any,
    firstParam: string,
    secondParam: string,
    thirdParam: string,
    fourthParam?: string
};

const Table: React.FC<TableComponentProps> = ({children,
                                              firstParam,
                                              secondParam,
                                              thirdParam,
                                              fourthParam}) => {
    return (
        <StyledTable>
            <tbody>
                <StyledTr>
                    <StyledTd>{firstParam}</StyledTd>
                    <StyledTd>{secondParam}</StyledTd>
                    <StyledTd>{thirdParam}</StyledTd>
                    <StyledTd>{fourthParam}</StyledTd>
                </StyledTr>
                {children}
            </tbody>
        </StyledTable>
    );
};

export default Table;