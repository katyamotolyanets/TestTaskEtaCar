import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: transparent;
  padding: 3% 7%;
  border: 0.01em solid black;
  border-radius: 1em;
  cursor: pointer;
  &:focus-within {
    outline: 1px solid #99a5ff;
  }
`

export const StyledCancelButton = styled.button`
  background-color: #4dffa6;
  padding: 7% 15%;
  border: 0.01em solid #4dffa6;
  border-radius: 1em;
  cursor: pointer;
  color: #fff;
  &:focus-within {
    outline: 1px solid #99a5ff;
  }
`

export const StyledConfirmButton = styled.input`
  background-color: #ff4d4d;
  padding: 7% 15%;
  border: 0.01em solid #ff4d4d;
  border-radius: 1em;
  cursor: pointer;
  color: #fff;
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