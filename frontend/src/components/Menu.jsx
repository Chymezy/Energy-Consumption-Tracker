// src/components/Menu.jsx

import React, { useState } from 'react';
import { Menu as MuiMenu, MenuItem, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import '../styles/Menu.css';

const Menu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (path) => {
    navigate(path);
    handleClose();
  };

  return (
    <div className="menu-container">
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <AccountCircleIcon />
      </IconButton>
      <MuiMenu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleMenuClick('/settings')}>Settings</MenuItem>
        <MenuItem onClick={() => handleMenuClick('/profile')}>Profile</MenuItem>
        <MenuItem onClick={() => handleMenuClick('/logout')}>Logout</MenuItem>
      </MuiMenu>
    </div>
  );
};

export default Menu;
