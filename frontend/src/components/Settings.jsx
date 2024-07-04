// src/components/Settings.jsx

import React from 'react';
import { Container, Typography } from '@mui/material';
import '../styles/Settings.css';

const Settings = () => {
  return (
    <Container className="settings-container">
      <Typography variant="h4" component="h1" gutterBottom>
        Settings
      </Typography>
      {/* Add settings form elements here */}
    </Container>
  );
};

export default Settings;
