import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Alert, Grid } from '@mui/material';
import profileService from '../services/profileService';
import '../styles/Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    country: '',
    cost_of_electricity: '',
    cost_of_fuel: '',
    electricity_availability: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await profileService.getProfile();
        setProfile(data);
      } catch (error) {
        setError('Error fetching profile data');
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await profileService.updateProfile(profile);
      setSuccess('Profile updated successfully');
      setError('');
    } catch (error) {
      setError('Error updating profile');
      setSuccess('');
    }
  };

  return (
    <Container className="profile-container">
      <Typography variant="h4" component="h1" gutterBottom>
        Profile
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              label="Full Name"
              name="name"
              value={profile.name || ''}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              label="Country"
              name="country"
              value={profile.country || ''}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              label="Cost of Electricity ($ per kWh)"
              name="cost_of_electricity"
              type="number"
              value={profile.cost_of_electricity || ''}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              label="Cost of Fuel ($ per unit)"
              name="cost_of_fuel"
              type="number"
              value={profile.cost_of_fuel || ''}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              label="Electricity Availability (hours per day)"
              name="electricity_availability"
              type="number"
              value={profile.electricity_availability || ''}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" type="submit" className="save-profile-button">
          Save Profile
        </Button>
      </form>
    </Container>
  );
};

export default Profile;
