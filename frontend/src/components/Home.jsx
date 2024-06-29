import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Container className="home-content">
        <Typography variant="h2" component="h1" gutterBottom>
          Energy Manager
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Track and Manage Your Energy Consumption Efficiently
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/login" sx={{ mt: 3 }}>
          Get Started
        </Button>
      </Container>
    </div>
  );
};

export default Home;
