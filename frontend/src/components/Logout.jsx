// src/components/Logout.jsx

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform logout logic here (e.g., clearing tokens)
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    navigate('/login');
  }, [navigate]);

  return null;
};

export default Logout;
