import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { registerService } from '../services/authService';
import '../styles/RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    fullName: '',
    city: '',
    country: '',
    sex: '',
    userType: '',
    profilePicture: null,
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');
    try {
      const form = new FormData();
      for (const key in formData) {
        form.append(key, formData[key]);
      }
      const response = await registerService(form);
      setSuccessMessage(response.message);
      // Clear the form
      setFormData({
        username: '',
        email: '',
        password: '',
        fullName: '',
        city: '',
        country: '',
        sex: '',
        userType: '',
        profilePicture: null,
      });
      // Redirect to login page
      navigate('/login');
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Error during registration');
    }
  };

  return (
    <Container maxWidth="sm" className="registration-form">
      <Typography variant="h4" gutterBottom>Register</Typography>
      {successMessage && <Alert severity="success">{successMessage}</Alert>}
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username *"
          name="username"
          value={formData.username}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Email *"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Password *"
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Sex"
          name="sex"
          value={formData.sex}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="User Type (Commercial/Industrial)"
          name="userType"
          value={formData.userType}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Box mt={2}>
          <Button variant="contained" component="label">
            Upload Profile Picture
            <input
              type="file"
              name="profilePicture"
              hidden
              onChange={handleChange}
            />
          </Button>
        </Box>
        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default RegistrationForm;
