import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/CartSlice';
import { Link } from 'react-router-dom'; 
import '../App.css';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncrease = (item) => {
    dispatch(increaseQuantity(item));
  };

  const handleDecrease = (item) => {
    dispatch(decreaseQuantity(item));
  };

  return (
    <div className="cart-container-page">
      <h1 style={{ textAlign: 'center', margin: '2rem 0' }}>Tu Carrito de Compras</h1>
      
      {cartItems.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Tu carrito está vacío.</h2>
            <p>¡Vuelve a la tienda para agregar plantas!</p>
            <br />
            {/* Botón para volver si está vacío */}
            <Link to="/products">
                <button className="continue-shopping-btn">Ir a Comprar</button>
            </Link>
        </div>
      ) : (
        <div className="cart-content">
            <div className="cart-items">
                {cartItems.map((item) => (
                <div key={item.id} className="cart-item-card">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    
                    <div className="cart-item-details">
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                    </div>

                    <div className="cart-item-quantity">
                        <button onClick={() => handleDecrease(item)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleIncrease(item)}>+</button>
                    </div>

                    <div className="cart-item-subtotal">
                        <p>Subtotal: ${item.price * item.quantity}</p>
                    </div>

                    <button className="delete-btn" onClick={() => handleRemove(item)}>
                        Eliminar
                    </button>
                </div>
                ))}
            </div>

            <div className="cart-summary">
                <h2>Total a Pagar: ${totalAmount}</h2>
                <button 
                    className="checkout-btn" 
                    onClick={() => alert("¡Próximamente Integración de Pagos!")}
                >
                    Pagar Ahora
                </button>
                <br />
                {/* Botón para seguir comprando */}
                <Link to="/products">
                    <button className="continue-shopping-btn">Seguir Comprando</button>
                </Link>
            </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;