import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import axios from "axios";

import './App.scss';
import {useActions} from "./hooks/useActions";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import Header from "./components/header/Header";
import WalletModal from "./pages/WalletModal";
import AddItemToWalletModal from "./pages/AddItemToWalletModal";

axios.defaults.baseURL = 'https://api.coincap.io/v2';

const App: React.FC = () => {
    const {initializeWallet, calculateInitialWalletPrice} = useActions();

    useEffect(() => {
        initializeWallet()
        calculateInitialWalletPrice()
    }, [])

    return (
        <div className="App">
            <Header/>
            <Router>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/main' element={<MainPage/>}/>
                    <Route path='/currency/:id' element={<DetailPage/>}/>
                </Routes>
            </Router>
            <WalletModal/>
            <AddItemToWalletModal/>
        </div>
  );
}

export default App;
