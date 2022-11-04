import React from 'react';
import { StyledWalletButton } from '../style';

const WalletButton: React.FC<any> = ({ children, handleClick }) => {
  return (
    <StyledWalletButton onClick={handleClick}>{children}</StyledWalletButton>
  );
};

export default WalletButton;
