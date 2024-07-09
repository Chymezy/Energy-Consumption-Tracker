import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section" id="features">
        <h2>Features</h2>
        <p>Our application provides comprehensive energy tracking capabilities...</p>
      </div>
      <div className="footer-section" id="about">
        <h2>About Us</h2>
        <p>Energy Manager is committed to helping you monitor and manage your energy consumption...</p>
      </div>
      <div className="footer-section" id="contact">
        <h2>Contact</h2>
        <p>You can reach us via email at contact@energymanager.com...</p>
      </div>
      <div className="footer-social">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
      <div className="footer-right">
        <span>© 2024 All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
