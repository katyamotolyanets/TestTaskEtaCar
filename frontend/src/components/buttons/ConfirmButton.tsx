import React from 'react';
import { StyledConfirmButton } from './style';

type ConfirmButtonComponentProps = {
    value: string,
    type: string
}

const ConfirmButton: React.FC<ConfirmButtonComponentProps> = ({value, type}) => {
    return (
        <StyledConfirmButton type={type} value={value}/>
    );
};

export default ConfirmButton;