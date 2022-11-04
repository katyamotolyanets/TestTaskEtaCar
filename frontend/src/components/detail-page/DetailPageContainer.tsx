import React from 'react';
import { StyledDetailPage } from './style';

type DetailPageContainerComponentProps = {
  children: any;
  name: string | null;
  symbol: string | null;
};

const DetailPageContainer: React.FC<DetailPageContainerComponentProps> = ({
  children,
  name,
  symbol,
}) => {
  return (
    <StyledDetailPage>
      <h2>
        {name} ({symbol})
      </h2>
      <div className='detail-page-info'>{children}</div>
    </StyledDetailPage>
  );
};

export default DetailPageContainer;
