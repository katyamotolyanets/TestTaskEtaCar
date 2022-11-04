import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useActions } from '../hooks/useActions';
import { trpc } from '../trpc';
import { formatStringToNumber } from '../utils/utilities';
import DetailPageContainer from '../components/detail-page/DetailPageContainer';
import WalletButton from '../components/buttons/wallet/WalletButton';
import LineChartContainer from '../components/linechart/LineChartContainer';

const DetailPage: React.FC = () => {
  const { id } = useParams();
  const { fetchCurrencyData, fetchCurrencyHistory, setCurrentCurrency } =
    useActions();
  const { data: currency, isLoading: currencyLoading } = trpc.useQuery([
    'getCurrencyById',
    id!,
  ]);
  const { data: history, isLoading: historyLoading } = trpc.useQuery([
    'fetchCurrencyHistory',
    id!,
  ]);

  useEffect(() => {
    fetchCurrencyData(currency);
    fetchCurrencyHistory(history);
  }, [currencyLoading, historyLoading]);

  const {
    rank,
    name,
    symbol,
    priceUsd,
    supply,
    maxSupply,
    marketCapUsd,
    vwap24Hr,
  } = currency || {};

  const navigate = useNavigate();
  const handleClickBackToMainPage = () => {
    navigate('/');
  };

  const handleClickBuyCurrency = () => {
    setCurrentCurrency(id!, priceUsd);
  };

  return (
    <DetailPageContainer name={name} symbol={symbol}>
      <div>Rank: {rank}</div>
      <div>Price: {formatStringToNumber(priceUsd)}$</div>
      <div>Available supply: {formatStringToNumber(supply)}</div>
      <div>
        Total quantity of asset issued: {formatStringToNumber(maxSupply)}
      </div>
      <div>
        Quantity of trading volume represented in USD over the last 24 hours:{' '}
        {formatStringToNumber(marketCapUsd)}$
      </div>
      <div>
        Average Price in the last 24 hours: {formatStringToNumber(vwap24Hr)}$
      </div>
      <WalletButton handleClick={handleClickBuyCurrency}>
        Add to wallet
      </WalletButton>
      <WalletButton handleClick={handleClickBackToMainPage}>
        Back to main
      </WalletButton>
      <LineChartContainer data={history} />
    </DetailPageContainer>
  );
};

export default DetailPage;
