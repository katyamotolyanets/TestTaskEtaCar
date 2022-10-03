import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  padding: 2% 5%;
  border: 0.01em solid black;
  border-radius: 10px;
  cursor: pointer;
`

interface ButtonComponentProps {
    children: string,
    onClick: () => void
}

const Button: React.FC<ButtonComponentProps> = ({children, onClick}) => {
    return (
        <StyledButton onClick={onClick}>{children}</StyledButton>
    );
};

export default Button;