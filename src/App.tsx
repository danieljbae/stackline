import React from 'react';
import './App.css';

import ProductPage from './components/ProductPage/ProductPage';
import Header from './components/Header/Header';

function App() {
    return (
        <div className="App">
            <Header />
            <ProductPage />
        </div>
    );
}

export default App;
