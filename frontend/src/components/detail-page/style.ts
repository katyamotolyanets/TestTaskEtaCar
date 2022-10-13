import styled from "styled-components";

export const StyledDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 3vmin;
  }
  .detail-page-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1em;
    div {
      padding: 0.1em;
    }
    .line-chart {
      margin: 1em 0;
    }
    button {
      margin-top: 1em;
      &:focus-within {
        outline: 1px solid #99a5ff;
      }
    }
  }
`