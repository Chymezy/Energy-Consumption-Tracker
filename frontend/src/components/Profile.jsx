// // src/components/Profile.jsx

// import React from 'react';
// import { Container, Typography } from '@mui/material';
// import '../styles/Profile.css';

// const Profile = () => {
//   return (
//     <Container className="profile-container">
//       <Typography variant="h4" component="h1" gutterBottom>
//         Profile
//       </Typography>
//       {/* Add profile display elements here */}
//     </Container>
//   );
// };

// export default Profile;

// src/components/Profile.jsx

import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Alert } from '@mui/material';
import profileService from '../services/profileService';
import '../styles/Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await profileService.getProfile();
        setProfile(data);
      } catch (error) {
        setError(error.message);
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
      setError(error.message);
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
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="Full Name"
          name="fullName"
          value={profile.fullName || ''}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="Username"
          name="username"
          value={profile.username || ''}
          onChange={handleChange}
        />
        {/* Add other profile fields here */}
        <Button variant="contained" color="primary" type="submit">
          Save Profile
        </Button>
      </form>
    </Container>
  );
};

export default Profile;
