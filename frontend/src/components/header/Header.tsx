import React from 'react';
import { StyledHeader } from './style';

type HeaderComponentProps = {
  children: any;
  topCurrencies: any;
};

const Header: React.FC<HeaderComponentProps> = ({ children, topCurrencies }) => {
  return (
    <StyledHeader>
      <div className="top-currencies-container">{topCurrencies}</div>
      {children}
    </StyledHeader>
  );
};

export default Header;
