// src/components/Home/Home.jsx
import React from 'react';
import './Home.css';
import magicMuffinImage from '../../assets/magic-muffin.jpg'; 

export const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenido a Magic Muffin</h1>
      <p>Envia el formlario de solicitud. Si tu deseo no incumple las reglas magicas te enviaresmos un muffin magico</p>
      <img src={magicMuffinImage} alt="Magic Muffin" />
    </div>
  );
};
