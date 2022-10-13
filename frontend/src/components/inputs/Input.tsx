import React from 'react';
import styled from "styled-components";

const StyledInput = styled.input`
  height: 100%;
  max-width: 100%;
  border: none;
  border-bottom: 0.01em solid black;
`

type InputComponentProps = {
    value: string | undefined,
    handleChange: (event: React.FormEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputComponentProps> = ({value, handleChange}) => {
    return (
        <StyledInput type="number"
               value={value ? value : ''}
               onChange={handleChange}
               max="999999999999999"/>
    );
};

export default Input;