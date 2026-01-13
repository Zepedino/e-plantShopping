import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ProductList from './pages/ProductList';
import './App.css';
import LandingPage from './pages/AboutUs';
import Header from './components/Header';
import CartPage from './pages/CartItem';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/' && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;