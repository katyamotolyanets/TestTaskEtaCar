import React from 'react';
import styled from "styled-components";

const StyledDetailPage = styled.div`
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

type DetailPageContainerComponentProps = {
    children: any,
    name: string | null,
    symbol: string | null
}


const DetailPageContainer: React.FC<DetailPageContainerComponentProps> = ({children, name, symbol}) => {
    return (
        <StyledDetailPage>
            <h2>{name} ({symbol})</h2>
            <div className='detail-page-info'>
                {children}
            </div>
        </StyledDetailPage>
    );
};

export default DetailPageContainer;