// // src/services/api.js
// import axios from 'axios';

// // Define base URL for API requests
// const API_URL = import.meta.env.VITE_REACT_APP_API_URL || 'http://localhost:4444/api';

// // Create axios instance
// const api = axios.create({
//   baseURL: API_URL,
// });

// // Request interceptor to add the token to headers
// api.interceptors.request.use(
//   config => {
//     const token = localStorage.getItem('accessToken');
//     if (token) {
//       config.headers['Authorization'] = 'Bearer ' + token;
//     }
//     // Conditionally set Content-Type if not already set
//     if (!config.headers['Content-Type']) {
//       config.headers['Content-Type'] = 'application/json';
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

// // Response interceptor to handle token expiration
// api.interceptors.response.use(
//   response => response,
//   async error => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         const refreshToken = localStorage.getItem('refreshToken');
//         const response = await axios.post(`${API_URL}/auth/refresh`, { refresh_token: refreshToken });
//         const { access_token } = response.data;
//         localStorage.setItem('accessToken', access_token);
//         originalRequest.headers['Authorization'] = 'Bearer ' + access_token;
//         return api(originalRequest);
//       } catch (refreshError) {
//         console.error('Token refresh failed', refreshError);
//         // Handle refresh token expiration (e.g., logout user)
//         localStorage.removeItem('accessToken');
//         localStorage.removeItem('refreshToken');
//         window.location.href = '/login';  // Redirect to login page
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// // API functions for different endpoints

// export const fetchUserProfilePicture = async () => {
//   try {
//     const response = await api.get('/user/profile-picture', {
//       responseType: 'arraybuffer', // Ensure we get binary data
//     });
//     const blob = new Blob([response.data], { type: response.headers['content-type'] });
//     const url = URL.createObjectURL(blob);
//     return url;
//   } catch (error) {
//     console.error('Error fetching profile picture', error);
//     throw error;
//   }
// };

// export const uploadUserProfilePicture = async (file) => {
//   try {
//     const formData = new FormData();
//     formData.append('file', file);
//     const response = await api.post('/user/profile-picture', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error uploading profile picture', error);
//     throw error;
//   }
// };

// // Fetch user energy benchmark
// export const fetchUserEnergyBenchmark = async () => {
//   try {
//     const response = await api.get('/user/energy-benchmark');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching energy benchmark', error);
//     throw error;
//   }
// };

// // Fetch user information
// export const fetchUserInfo = async () => {
//   try {
//     const response = await api.get('/user/info');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching user info', error);
//     throw error;
//   }
// };

// // Login user
// export const login = async (username, password) => {
//   try {
//     const response = await api.post('/auth/login', { username, password });
//     return response.data;
//   } catch (error) {
//     console.error('Error logging in', error);
//     throw error;
//   }
// };

// // Register user
// export const register = async (formData) => {
//   try {
//     const response = await api.post('/user/info', formData);
//     return response.data;
//   } catch (error) {
//     console.error('Error registering', error);
//     throw error;
//   }
// };

// export default api;


// src/services/api.js
import axios from 'axios';

// Define base URL for API requests
const API_URL = import.meta.env.VITE_REACT_APP_API_URL || 'http://localhost:4444/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
});

// Request interceptor to add the token to headers
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    // Always ensure Content-Type is set to application/json for requests with data
    if (config.data && !(config.data instanceof FormData)) {
      config.headers['Content-Type'] = 'application/json';
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token expiration
api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await axios.post(`${API_URL}/auth/refresh`, { refresh_token: refreshToken });
        const { access_token } = response.data;
        localStorage.setItem('accessToken', access_token);
        originalRequest.headers['Authorization'] = 'Bearer ' + access_token;
        return api(originalRequest);
      } catch (refreshError) {
        console.error('Token refresh failed', refreshError);
        // Handle refresh token expiration (e.g., logout user)
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';  // Redirect to login page
      }
    }
    return Promise.reject(error);
  }
);

// API functions for different endpoints

// Fetch user profile picture
export const fetchUserProfilePicture = async () => {
  try {
    const response = await api.get('/user/profile-picture');
    return response.data;
  } catch (error) {
    console.error('Error fetching profile picture', error);
    throw error;
  }
};

// Upload user profile picture
export const uploadUserProfilePicture = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    const response = await api.post('/user/profile-picture', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading profile picture', error);
    throw error;
  }
};

// Fetch user energy benchmark
export const fetchUserEnergyBenchmark = async () => {
  try {
    const response = await api.get('/user/energy-benchmark');
    return response.data;
  } catch (error) {
    console.error('Error fetching energy benchmark', error);
    throw error;
  }
};

// Fetch user information
export const fetchUserInfo = async () => {
  try {
    const response = await api.get('/user/info');
    return response.data;
  } catch (error) {
    console.error('Error fetching user info', error);
    throw error;
  }
};

// Fetch daily energy consumption data
export const fetchDailyEnergyConsumption = async () => {
  try {
    const response = await api.get('/energy/daily-consumption');
    return response.data;
  } catch (error) {
    console.error('Error fetching daily energy consumption data', error);
    throw error;
  }
};

// Login user
export const login = async (username, password) => {
  try {
    const response = await api.post('/auth/login', { username, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in', error);
    throw error;
  }
};

// Register user
export const register = async (formData) => {
  try {
    const response = await api.post('/user/info', formData);
    return response.data;
  } catch (error) {
    console.error('Error registering', error);
    throw error;
  }
};

export default api;
