// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar'; // Asegúrate de que la ruta sea correcta
import { Home } from './components/Home/Home'; // Asegúrate de que la ruta sea correcta
import { Contacto } from './components/Contacto/Contacto'; // Asegúrate de que la ruta sea correcta
import './App.css'; // Asegúrate de que la ruta sea correcta

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
};

export default App;
