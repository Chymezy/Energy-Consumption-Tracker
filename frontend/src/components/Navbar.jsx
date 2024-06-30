import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import logo from '../assets/logos/logo_1.jpg';
import '../styles/Navbar.css'; // Import the Navbar-specific CSS

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar position="fixed" color="default" sx={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Energy Manager Logo" className="navbar-logo" />
          <Typography variant="h6" component="span" className="navbar-title">
            Energy Manager
          </Typography>
        </Box>
        <Box>
          <Button color="inherit" component={NavLink} to="/" exact className={location.pathname === '/' ? 'active-link' : ''}>
            Home
          </Button>
          <Button color="inherit" component={NavLink} to="/features" className={location.pathname === '/features' ? 'active-link' : ''}>
            Features
          </Button>
          <Button color="inherit" component={NavLink} to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>
            About
          </Button>
          <Button color="inherit" component={NavLink} to="/login" className={location.pathname === '/login' ? 'active-link' : ''}>
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;


