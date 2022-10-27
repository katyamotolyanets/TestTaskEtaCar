import React from 'react';
import { StyledInput } from './style';

type InputComponentProps = {
    value: string | undefined,
    type?: string,
    testId?: string,
    handleChange?: (event: React.FormEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputComponentProps> = ({value, type, testId, handleChange}) => {
    return (
        <StyledInput data-testid={testId}
               type={type}
               value={value ? value : ''}
               onChange={handleChange}
               max="999999999999999"
               min="0.01"/>
    );
};

export default Input;