import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 1% 5%;
  width: 100%;
  .top-currencies-container {
    display: flex;  
    p {
      padding: 0 1%;
    }
  }
  div {
    white-space: nowrap;
    padding: 0 1%;
  }
`

interface HeaderComponentProps {
    children: any,
    topCurrencies: any
}

const Header: React.FC<HeaderComponentProps> = ({children, topCurrencies}) => {
    return (
        <StyledHeader>
            <div className='top-currencies-container'>
                {topCurrencies}
            </div>
            {children}
        </StyledHeader>
    );
};

export default Header;