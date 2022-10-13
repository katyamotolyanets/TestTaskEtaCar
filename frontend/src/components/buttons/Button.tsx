import React from 'react';
import { StyledButton } from './style';

type ButtonComponentProps = {
    children: string,
    onClick?: () => void
}

const Button: React.FC<ButtonComponentProps> = ({children, onClick}) => {
    return (
        <StyledButton onClick={onClick}>{children}</StyledButton>
    );
};

export default Button;