import React, { useState } from 'react';
import { login } from '../api';
import { useNavigate } from 'react-router-dom';
import { Container, Box, TextField, Button, Typography, Alert, Grid } from '@mui/material';
import '../styles/LoginForm.css';
import energyImage from '../assets/images/energy-tracker.jpg'; // Placeholder for the energy-themed image

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      setErrorMessage('Username and password are required');
      return;
    }

    try {
      const response = await login(username, password);
      const { access_token, refresh_token } = response.data;
      localStorage.setItem('accessToken', access_token);
      localStorage.setItem('refreshToken', refresh_token);
      navigate('/welcome');  // Redirect to welcome page
    } catch (error) {
      setErrorMessage('Login failed');
      console.error('Login failed', error);
    }
  };

  return (
    <Grid container className="login-container">
      <Grid item xs={12} md={6} className="login-form-container">
        <Container className="login-box">
          <Typography variant="h4" component="h1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              label="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              type="password"
              label="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {errorMessage && (
              <Alert severity="error" className="login-error">
                {errorMessage}
              </Alert>
            )}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              className="login-button"
            >
              Login
            </Button>
          </form>
        </Container>
      </Grid>
      <Grid item xs={12} md={6} className="login-image-container">
        <img src={energyImage} alt="Energy" className="login-image" />
      </Grid>
    </Grid>
  );
};

export default LoginForm;
