import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  padding: 3% 7%;
  border: 0.01em solid black;
  border-radius: 1em;
  cursor: pointer;
  &:focus-within {
    outline: 1px solid #99a5ff;
  }
`

interface ButtonComponentProps {
    children: string,
    onClick?: () => void
}

const Button: React.FC<ButtonComponentProps> = ({children, onClick}) => {
    return (
        <StyledButton onClick={onClick}>{children}</StyledButton>
    );
};

export default Button;