import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import '../styles/Features.css';
import backgroundVideo from '../assets/clips/meter-clip.mp4';

const Features = () => {
  return (
    <div className="features-wrapper">
      <video autoPlay muted loop className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Container className="features-container">
        <Box className="features-content">
          <Typography variant="h4" component="h2" gutterBottom className="features-title">
            Features
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box className="feature-box">
                <Typography variant="h6" component="h3" gutterBottom className="feature-title">
                  User Registration and Login
                </Typography>
                <Typography variant="body1" className="feature-description">
                  Create an account and log in to access and personalize your energy consumption data with ease.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="feature-box">
                <Typography variant="h6" component="h3" gutterBottom className="feature-title">
                  Add Energy Consumption Data
                </Typography>
                <Typography variant="body1" className="feature-description">
                  Log your daily energy consumption to track and manage your energy usage over time.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="feature-box">
                <Typography variant="h6" component="h3" gutterBottom className="feature-title">
                  View Energy Consumption Trends
                </Typography>
                <Typography variant="body1" className="feature-description">
                  Visualize your energy consumption patterns and trends with dynamic charts and graphs.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="feature-box">
                <Typography variant="h6" component="h3" gutterBottom className="feature-title">
                  Update Energy Consumption Data
                </Typography>
                <Typography variant="body1" className="feature-description">
                  Ensure your records are accurate by updating or deleting previous energy consumption entries.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="feature-box">
                <Typography variant="h6" component="h3" gutterBottom className="feature-title">
                  Average Energy Consumption Insights
                </Typography>
                <Typography variant="body1" className="feature-description">
                  View your average energy consumption over selected periods to better understand your energy usage.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Features;
