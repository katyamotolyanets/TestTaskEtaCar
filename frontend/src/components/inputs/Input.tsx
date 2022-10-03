import React from 'react';
import styled from "styled-components";

const StyledInput = styled.input`
  height: 100%;
  max-width: 100%;
  border: none;
  border-bottom: 0.01em solid black;
`

interface InputComponentProps {
    value: string | null,
    handleChange: any
}

const Input: React.FC<InputComponentProps> = ({value, handleChange}) => {
    return (
        <StyledInput type="text"
               value={value ? value : ''}
               onChange={handleChange}/>
    );
};

export default Input;