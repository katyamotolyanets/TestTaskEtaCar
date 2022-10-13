import React from 'react';
import { StyledCancelButton } from './style';

type CancelButtonComponentProps = {
    children: any,
    handleClick: () => void
}

const CancelButton: React.FC<CancelButtonComponentProps> = ({children, handleClick}) => {
    return (
        <StyledCancelButton onClick={handleClick}>{children}</StyledCancelButton>
    );
};

export default CancelButton;