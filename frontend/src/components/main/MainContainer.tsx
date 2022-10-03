import React from 'react';
import styled from "styled-components";

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2% 5%;
  margin: 0 10%;
`

const MainContainer: React.FC<any> = ({children}) => {
    return (
        <StyledMainContainer>{children}</StyledMainContainer>
    );
};

export default MainContainer;