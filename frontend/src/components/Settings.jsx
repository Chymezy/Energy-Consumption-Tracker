// src/components/Settings.jsx

import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Alert } from '@mui/material';
import settingsService from '../services/settingsService';
import '../styles/Settings.css';

const Settings = () => {
  const [settings, setSettings] = useState({});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await settingsService.getSettings();
        setSettings(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchSettings();
  }, []);

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await settingsService.updateSettings(settings);
      setSuccess('Settings updated successfully');
      setError('');
    } catch (error) {
      setError(error.message);
      setSuccess('');
    }
  };

  return (
    <Container className="settings-container">
      <Typography variant="h4" component="h1" gutterBottom>
        Settings
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="Example Setting"
          name="exampleSetting"
          value={settings.exampleSetting || ''}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Save Settings
        </Button>
      </form>
    </Container>
  );
};

export default Settings;
