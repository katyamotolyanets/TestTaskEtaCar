import React from 'react';
import { StyledButton } from '../style';

export type ButtonComponentProps = {
  children: string;
  type?: string;
  backgroundColor?: string;
  border?: boolean;
  color?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonComponentProps> = ({
  children,
  border,
  type,
  backgroundColor,
  color,
  onClick,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      background={backgroundColor!}
      border={border!}
      color={color!}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
