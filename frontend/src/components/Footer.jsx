import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      component="footer"
      className="footer"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        width: '100%',
        boxShadow: '0px -2px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          Privacy Policy
        </Link>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          Terms of Service
        </Link>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          Contact Us
        </Link>
      </Box>
      <Box>
        <Link href="https://www.facebook.com" target="_blank" color="inherit" sx={{ mx: 1 }}>
          <FacebookIcon />
        </Link>
        <Link href="https://www.twitter.com" target="_blank" color="inherit" sx={{ mx: 1 }}>
          <TwitterIcon />
        </Link>
        <Link href="https://www.linkedin.com" target="_blank" color="inherit" sx={{ mx: 1 }}>
          <LinkedInIcon />
        </Link>
      </Box>
      <Box>
        <Typography variant="body2" color="textSecondary" style={{ display: 'flex', alignItems: 'center' }}>
          &copy; {new Date().getFullYear()} Energy Manager. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
