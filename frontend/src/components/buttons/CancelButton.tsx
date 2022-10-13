import React from 'react';
import styled from "styled-components";

const StyledCancelButton = styled.button`
  background-color: #4dffa6;
  padding: 7% 15%;
  border: 0.01em solid #4dffa6;
  border-radius: 1em;
  cursor: pointer;
  color: #fff;
  &:focus-within {
    outline: 1px solid #99a5ff;
  }
`

interface CancelButtonComponentProps {
    children: any,
    handleClick: () => void
}

const CancelButton: React.FC<CancelButtonComponentProps> = ({children, handleClick}) => {
    return (
        <StyledCancelButton onClick={handleClick}>{children}</StyledCancelButton>
    );
};

export default CancelButton;