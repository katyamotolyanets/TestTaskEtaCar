import React from 'react';
import styled from "styled-components";

const StyledTable = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
  text-align: center;
`

export const StyledTd = styled.td`
    border-top: 0.01em solid #ccd2ff;
    position: relative;
    padding: 1%;
    width: 10%;
    &:first-child {
      text-align: left;
      padding-left: 5%;
    }
`

export const StyledTr = styled.tr`
  width: 7%;
  &:first-child {
    td {
      background-color: #f2f3ff;
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
                    {
                        fourthParam ?
                            <StyledTd>{fourthParam}</StyledTd>
                            :
                            null
                    }
                </StyledTr>
                {children}
            </tbody>
        </StyledTable>
    );
};

export default Table;