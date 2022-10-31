import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import './App.scss';
import { trpc } from './trpc';
import { useActions } from './hooks/useActions';
import { GlobalStyle } from './styles/global';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import WalletModal from './pages/WalletModal';
import Navbar from './pages/Navbar';
import AddItemToWalletModal from './pages/AddItemToWalletModal';
import { WalletCurrencyInfo } from './types/wallet';

const client = new QueryClient();

const AppContent: React.FC = () => {
  const {
    fetchWalletCurrenciesData,
    initializeWallet,
    calculateInitialWalletPrice,
    setCurrentWalletPrice,
  } = useActions();

  const wallet: WalletCurrencyInfo[] = JSON.parse(localStorage.getItem('wallet') as string) || [];
  const { data: topThreeCurrencies } = trpc.useQuery([
    'getLimitCurrenciesWithOffset',
    { limit: 3, offset: 0 },
  ]);
  const { data: currencies } = trpc.useQuery(['fetchCurrenciesFromArray', wallet]);

  useEffect(() => {
    initializeWallet();
    fetchWalletCurrenciesData(topThreeCurrencies, currencies!);
    setCurrentWalletPrice();
    calculateInitialWalletPrice();
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/currency/:id" element={<DetailPage />} />
        </Routes>
      </Router>
      <WalletModal />
      <AddItemToWalletModal />
    </div>
  );
};

const App = () => {
  const [trpcClient] = useState(() =>
    trpc.createClient({
      url: 'https://test-task-etacar.herokuapp.com:8080/trpc',
    }),
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={client}>
      <QueryClientProvider client={client}>
        <AppContent />
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default App;
