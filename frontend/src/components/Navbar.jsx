import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import logo from '../assets/logos/logo_1.jpg';
import '../styles/Navbar.css'; // Ensure this is correctly imported

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar position="fixed" color="default" sx={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Toolbar>
        <img src={logo} alt="Energy Manager Logo" style={{ height: '40px', marginRight: '16px' }} />
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Energy Manager
        </Typography>
        <Button
          color="inherit"
          component={NavLink}
          to="/"
          exact="true"
          className={`${location.pathname === '/' ? 'active-link' : ''} navbar-button`}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={NavLink}
          to="/features"
          className={`${location.pathname === '/features' ? 'active-link' : ''} navbar-button`}
        >
          Features
        </Button>
        <Button
          color="inherit"
          component={NavLink}
          to="/about"
          className={`${location.pathname === '/about' ? 'active-link' : ''} navbar-button`}
        >
          About
        </Button>
        <Button
          color="inherit"
          component={NavLink}
          to="/login"
          className={`${location.pathname === '/login' ? 'active-link' : ''} navbar-button`}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
