import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <Box
      component="footer"
      className="footer"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // Adjust for small screens to stack vertically
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        width: '100%',
        boxShadow: '0px -2px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box className="footer-links">
        <Link href="#" color="inherit">
          Privacy Policy
        </Link>
        <Link href="#" color="inherit">
          Terms of Service
        </Link>
        <Link href="#" color="inherit">
          Contact Us
        </Link>
      </Box>
      <Box className="social-icons">
        <Link href="https://www.facebook.com" target="_blank" color="inherit">
          <FacebookIcon />
        </Link>
        <Link href="https://www.twitter.com" target="_blank" color="inherit">
          <TwitterIcon />
        </Link>
        <Link href="https://www.linkedin.com" target="_blank" color="inherit">
          <LinkedInIcon />
        </Link>
      </Box>
      <Box className="copyright">
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Energy Manager. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
