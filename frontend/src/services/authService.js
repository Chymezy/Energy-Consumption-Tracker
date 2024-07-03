// import { login, register } from '../api';

// // Importance: Abstracts API calls for authentication.

// // Define function to perform login
// const loginService = async (username, password) => {
//   const response = await login(username, password);
//   // Handle login response
//   return response.data;
// };

// // Define function to perform registration
// const registerService = async (username, password) => {
//   const response = await register(username, password);
//   // Handle registration response
//   return response.data;
// };

// export { loginService, registerService };


// src/services/authService.js

import { register } from '../api';

// Define function to perform registration
const registerService = async (formData) => {
  try {
    const response = await register(formData);
    // Handle registration response
    return response.data; // Assuming your backend returns data upon successful registration
  } catch (error) {
    throw new Error('Registration failed'); // Handle errors as per your application's needs
  }
};

export { registerService };
