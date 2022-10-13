import React from 'react';
import { StyledInput } from './style';

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