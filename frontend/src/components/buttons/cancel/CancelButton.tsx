import React from 'react';
import Button from "../default/Button";

export type CancelButtonComponentProps = {
    children: string,
    onClick?: () => void
}

const CancelButton: React.FC<CancelButtonComponentProps> = ({children, onClick}) => {
    return (
        <Button onClick={onClick} type='button' backgroundColor='#ff4d4d' border={false} color='#fff'>{children}</Button>
    );
};

export default CancelButton;