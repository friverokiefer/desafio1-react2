import React from 'react';
import './Contacto.css';

export const Contacto = () => {
  return (
    <div className="contacto">
      <h2>Solicita tu muffin magico</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Cuentanos tu deseo:</label>
          <textarea id="description" name="description" rows="4" required></textarea>
        </div>
        <button type="submit">Enviar deseo</button>
      </form>
    </div>
  );
};
