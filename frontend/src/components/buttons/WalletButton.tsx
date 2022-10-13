import React from 'react';
import styled from "styled-components";

const StyledWalletButton = styled.button`
  padding: 1% 2%;
  background-color: #e6e8ff;
  border: 0.01em solid #e6e8ff;
  border-radius: 10px;
  cursor: pointer;
  &:focus-within {
    outline: 1px solid #99a5ff;
  }
`

const WalletButton: React.FC<any> = ({children, handleClick}) => {
    return (
        <StyledWalletButton onClick={handleClick}>{children}</StyledWalletButton>
    );
};

export default WalletButton;