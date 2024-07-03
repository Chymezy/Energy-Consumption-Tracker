// src/components/Dashboard.jsx

import React, { useState, useEffect } from 'react';
import { Typography, Box, Card, CardContent, Grid, TextField, Button } from '@mui/material';
import axios from 'axios';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [energySaved, setEnergySaved] = useState(0);
  const [moneySaved, setMoneySaved] = useState(0);
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  useEffect(() => {
    // Fetch the energy and money saved data
    const fetchSavingsData = async () => {
      try {
        const response = await axios.get('/api/savings', {
          params: { start: dateRange.start, end: dateRange.end },
        });
        setEnergySaved(response.data.energySaved);
        setMoneySaved(response.data.moneySaved);
      } catch (error) {
        console.error('Error fetching savings data', error);
      }
    };

    if (dateRange.start && dateRange.end) {
      fetchSavingsData();
    }
  }, [dateRange]);

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDateRange((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateSubmit = (e) => {
    e.preventDefault();
    // Additional logic if needed on date submit
  };

  return (
    <Box className="dashboard-container">
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Box component="form" onSubmit={handleDateSubmit} className="date-selector-form">
        <TextField
          label="Start Date"
          type="date"
          name="start"
          value={dateRange.start}
          onChange={handleDateChange}
          InputLabelProps={{ shrink: true }}
          className="date-input"
        />
        <TextField
          label="End Date"
          type="date"
          name="end"
          value={dateRange.end}
          onChange={handleDateChange}
          InputLabelProps={{ shrink: true }}
          className="date-input"
        />
        <Button type="submit" variant="contained" color="primary">
          Apply
        </Button>
      </Box>
      <Grid container spacing={4} className="dashboard-grid">
        <Grid item xs={12} sm={6} md={4}>
          <Card className="dashboard-card">
            <CardContent>
              <Typography variant="h5" component="h2">
                Energy Saved
              </Typography>
              <Typography variant="h4" component="p">
                {energySaved} kWh
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="dashboard-card">
            <CardContent>
              <Typography variant="h5" component="h2">
                Money Saved
              </Typography>
              <Typography variant="h4" component="p">
                ${moneySaved}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Additional cards can be added here */}
      </Grid>
    </Box>
  );
};

export default Dashboard;
