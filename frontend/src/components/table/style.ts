import styled from "styled-components";

type TableRowProps = {
    background?: string
}

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  text-align: center;
`

export const StyledTd = styled.td`
  border-top: 0.01em solid #ccd2ff;
  position: relative;
  padding: 2%;
  width: 10%;
  margin: 2%;
  &:first-child {
      text-align: left;
      padding-left: 5%;
  }
  &:focus-within {
    outline: 1px solid #99a5ff;
  }
`

export const StyledTr = styled.tr<TableRowProps>`
  width: max-content;
  white-space: normal;
  margin: .5em;
  &:first-child {
    td {
      background-color: ${({background}) => background ? background : '#f2f3ff'};
      border: none;
    }
  }
  &:hover,
  &:focus-within {
    background-color: ${({background}) => background ? background : '#f2f3ff'};
  }
`