// src/components/Home/Home.jsx
import React from 'react';
import './Home.css';
import magicMuffinImage from '../../assets/magic-muffin.jpg'; // Asegúrate de que la ruta sea correcta

export const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Happy Cake</h1>
      <p>Your one-stop shop for magical muffins that make your wishes come true!</p>
      <img src={magicMuffinImage} alt="Magic Muffin" /> {/* Imagen añadida aquí */}
    </div>
  );
};
