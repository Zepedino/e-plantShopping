import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; 
import { FaShoppingCart, FaLeaf } from 'react-icons/fa'; 
import '../App.css';
import logoImage from '../assets/Logo.png';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header-container">
      <Link to="/" className="header-logo">
        <img src={logoImage} alt="Logo Paradise Nursery" className="logo-img" />
        
        <div className="title-container">
            <h1>Invernadero Atlas</h1>
            <p className="slogan-header">Donde el verde trae calma</p>
        </div>
      </Link>

      <nav className="header-nav">
        <Link to="/products" className="nav-link">Plantas</Link>
        
        <Link to="/cart" className="cart-container">
          <FaShoppingCart size={24} />
          {totalQuantity > 0 && <span className="cart-badge">{totalQuantity}</span>}
        </Link>
      </nav>
    </header>
  );
}

export default Header;