import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import logo from '../assets/logos/logo_1.jpg';

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar position="fixed" color="default" sx={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} className="navbar">
      <Toolbar>
        <img src={logo} alt="Energy Manager Logo" style={{ height: '40px', marginRight: '16px' }} />
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Energy Manager
        </Typography>
        <Button
          color="inherit"
          component={NavLink}
          to="/"
          className={({ isActive }) => (isActive ? 'active-link' : '')} /* newly added or modified */
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={NavLink}
          to="/features"
          className={({ isActive }) => (isActive ? 'active-link' : '')} /* newly added or modified */
        >
          Features
        </Button>
        <Button
          color="inherit"
          component={NavLink}
          to="/about"
          className={({ isActive }) => (isActive ? 'active-link' : '')} /* newly added or modified */
        >
          About
        </Button>
        <Button
          color="inherit"
          component={NavLink}
          to="/login"
          className={({ isActive }) => (isActive ? 'active-link' : '')} /* newly added or modified */
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
