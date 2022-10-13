import React from 'react';
import { StyledTable, StyledTd, StyledTr } from './style';

type TableComponentProps = {
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