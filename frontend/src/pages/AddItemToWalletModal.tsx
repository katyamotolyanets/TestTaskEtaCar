import React, { FormEvent, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { trpc } from '../trpc';
import Modal from '../components/modal/Modal';
import Input from '../components/inputs/Input';
import Button from '../components/buttons/default/Button';
import { WalletCurrencyInfo } from '../types/wallet';

const AddItemToWalletModal = () => {
  const {
    setCurrentCurrency,
    addCurrencyToWallet,
    setCurrentWalletPrice,
    fetchWalletCurrenciesData,
  } = useActions();
  const wallet: WalletCurrencyInfo[] =
    JSON.parse(localStorage.getItem('wallet') as string) || [];
  const { data: topThreeCurrencies } = trpc.useQuery([
    'getLimitCurrenciesWithOffset',
    { limit: 3, offset: 0 },
  ]);
  const { data: currencies } = trpc.useQuery([
    'fetchCurrenciesFromArray',
    wallet,
  ]);
  const [countOfCurrency, setCountOfCurrency] = useState<string | undefined>(
    undefined,
  );
  const { currentCurrency } = useTypedSelector((state) => state.currencies);
  const { id, priceUsd } = currentCurrency;

  const handleChangeCountOfCurrency = (
    event: React.FormEvent<HTMLInputElement>,
  ) => {
    setCountOfCurrency(event.currentTarget.value);
  };

  const handleSubmitAddToWallet = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addCurrencyToWallet(id!, priceUsd!, Number(countOfCurrency));
    fetchWalletCurrenciesData(topThreeCurrencies, currencies);
    setCurrentWalletPrice();
    setCurrentCurrency('', '');
    setCountOfCurrency(undefined);
  };

  const handleClickHideModal = () => {
    setCurrentCurrency('', '');
  };

  return (
    <Modal
      isActive={currentCurrency.id}
      handleClickHideModal={handleClickHideModal}
    >
      <h2>{currentCurrency.id}</h2>
      <form onSubmit={handleSubmitAddToWallet}>
        <Input
          value={countOfCurrency}
          handleChange={handleChangeCountOfCurrency}
        />
        <Button border={true}>Add to wallet</Button>
      </form>
    </Modal>
  );
};

export default AddItemToWalletModal;
