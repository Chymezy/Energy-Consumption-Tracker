// src/services/authService.js

import { login, register } from './api';

// Login service
const loginService = async (username, password) => {
  try {
    const data = await login(username, password);
    return data;
  } catch (error) {
    console.error('Error in login service:', error);
    throw error;
  }
};

// Registration service
const registerService = async (formData) => {
  try {
    const data = await register(formData);
    return data;
  } catch (error) {
    console.error('Error in registration service:', error);
    throw error;
  }
};

export { loginService, registerService };
