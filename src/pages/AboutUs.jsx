import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Invernadero Atlas</h1>
      
      <div className="divider"></div>
      
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Donde el verde trae calma</p>
      
      <p className="landing-description">
        En Invernadero Atlas, creemos que cada hogar merece un toque de naturaleza. 
        Nos especializamos en seleccionar las mejores plantas de interior, desde purificadoras 
        de aire hasta especies aromáticas, para transformar tus espacios en santuarios de paz y frescura.
        ¡Explora nuestra colección y dale vida a tu entorno!
      </p>
      
      <Link to="/products">
        <button className="get-started-btn">Comenzar</button>
      </Link>
    </div>
  );
};

export default LandingPage;