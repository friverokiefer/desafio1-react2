// src/components/Contacto/Contacto.jsx
import React from 'react';
import './Contacto.css';

export const Contacto = () => {
  return (
    <div className="contacto">
      <h2>Make Your Wish with The Magic Muffin!</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Your Wish:</label>
          <textarea id="description" name="description" rows="4" required></textarea>
        </div>
        <button type="submit">Send Wish</button>
      </form>
    </div>
  );
};
