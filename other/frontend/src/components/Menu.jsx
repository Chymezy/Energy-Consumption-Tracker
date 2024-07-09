// src/components/Menu.jsx
import React from 'react';
import '../styles/Menu.css';

const Menu = ({ onLogout, onSettings }) => {
  return (
    <div className="menu">
      <a href="#profile">View Profile</a>
      <a href="#" onClick={onSettings}>Settings</a>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Menu;
