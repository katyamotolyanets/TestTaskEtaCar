import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 1% 5%;
  width: 100%;
  .top-currencies-container {
    display: flex;
    margin: 2%;
    p {
      padding: 0 1%;
    }
  }
  div {
    white-space: nowrap;
    padding: 0 1%;
  }
  @media screen and (max-width: 1550px) {
    .top-currencies-container {
      flex-wrap: wrap;
    }
    div {
      white-space: normal;
    }
  }
`;
