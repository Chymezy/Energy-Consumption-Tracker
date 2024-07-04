// src/components/Profile.jsx

import React from 'react';
import { Container, Typography } from '@mui/material';
import '../styles/Profile.css';

const Profile = () => {
  return (
    <Container className="profile-container">
      <Typography variant="h4" component="h1" gutterBottom>
        Profile
      </Typography>
      {/* Add profile display elements here */}
    </Container>
  );
};

export default Profile;
