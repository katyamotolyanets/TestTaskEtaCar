import React from 'react';
import styled from "styled-components";

const StyledConfirmButton = styled.input`
  background-color: #ff4d4d;
  padding: 7% 15%;
  border: 0.01em solid #ff4d4d;
  border-radius: 1em;
  cursor: pointer;
  color: #fff;
`

interface ConfirmButtonComponentProps {
    value: string,
    type: string
}

const ConfirmButton: React.FC<ConfirmButtonComponentProps> = ({value, type}) => {
    return (
        <StyledConfirmButton type={type} value={value}/>
    );
};

export default ConfirmButton;