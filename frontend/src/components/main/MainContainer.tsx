import React from 'react';
import { StyledMainContainer } from './style';

const MainContainer: React.FC<any> = ({ children }) => {
  return <StyledMainContainer>{children}</StyledMainContainer>;
};

export default MainContainer;
