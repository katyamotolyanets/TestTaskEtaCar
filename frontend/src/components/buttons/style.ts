import styled from "styled-components";

type ButtonProps = {
    type: string,
    background: string,
    border: boolean,
    color: string
}

export const StyledButton = styled.button.attrs((props: ButtonProps) => ({
    type: props.type,
}))<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.background || 'transparent'};
  line-height: 2;
  padding: 0 1rem;
  color: ${props => props.color || 'black'};
  border: ${props => props.border ? '0.01em solid black' : 'none'}; 
  border-radius: 1em;
  cursor: pointer;
  &:focus-within {
    outline: 1px solid #99a5ff;
  }
`

export const StyledWalletButton = styled.button`
  padding: 1% 2%;
  background-color: #e6e8ff;
  border: 0.01em solid #e6e8ff;
  border-radius: 10px;
  cursor: pointer;
  &:focus-within {
    outline: 1px solid #99a5ff;
  }
`