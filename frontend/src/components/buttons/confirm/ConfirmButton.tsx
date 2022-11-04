import React from 'react';
import Button from '../default/Button';

type ConfirmButtonComponentProps = {
  children: string;
};

const ConfirmButton: React.FC<ConfirmButtonComponentProps> = ({ children }) => {
  return (
    <Button type='submit' backgroundColor='#4dffa6' border={false} color='#fff'>
      {children}
    </Button>
  );
};

export default ConfirmButton;
