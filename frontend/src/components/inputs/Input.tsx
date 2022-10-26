import React from 'react';
import { StyledInput } from './style';

type InputComponentProps = {
    value: string | undefined,
    type?: string,
    handleChange?: (event: React.FormEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputComponentProps> = ({value, type, handleChange}) => {
    return (
        <StyledInput type={type}
               value={value ? value : ''}
               onChange={handleChange}
               max="999999999999999"
               min="0.01"/>
    );
};

export default Input;