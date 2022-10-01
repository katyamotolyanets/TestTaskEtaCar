import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.scss';
import MainPage from "./components/main/MainPage";
import axios from "axios";
import DetailPage from "./components/detail-page/DetailPage";
import Header from "./components/header/Header";
import {useActions} from "./hooks/useActions";

axios.defaults.baseURL = 'https://api.coincap.io/v2';

const App: React.FC = () => {
    const {costOfWallet} = useActions();
    useEffect(() => {
        costOfWallet()
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
    </div>
  );
}

export default App;
