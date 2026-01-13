import React from 'react';
import '../App.css';
import plantsArray from '../data/plants';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartSlice';
import { removeFromCart } from '../redux/CartSlice';


const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  const isPlantInCart = (plantId) => cartItems.some((item) => item.id === plantId);
  const categories = [...new Set(plantsArray.map((plant) => plant.category))];

  return (
    <div className="product-list-container">
      <h1 style={{ textAlign: 'center', margin: '2rem 0' }}>Nuestras Plantas</h1>
      {categories.map((category) => (
        <div key={category}>
          <h2 className="category-title">{category}</h2>
          
          <div className="product-grid">
            {plantsArray
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const added = isPlantInCart(plant.id);
                return (
                  <div key={plant.id} className="product-card">
                    <img src={plant.image} alt={plant.name} className="product-image" />
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <p className="product-price">${plant.price}</p>
                    <button 
                      className={`add-to-cart-btn ${added ? 'added' : ''}`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={added}
                      style={{ 
                        backgroundColor: added ? '#ccc' : '#2e7d32', 
                        cursor: added ? 'not-allowed' : 'pointer' 
                      }}
                    >
                      {added ? "Agregado" : "Añadir al Carrito"}
                    </button>
                  </div>
                );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;