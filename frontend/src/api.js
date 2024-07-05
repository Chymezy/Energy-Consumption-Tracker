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
    if (config.data) {
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

// Define API endpoints
const login = (username, password) => api.post('/auth/login', { username, password });
const register = (formData) => api.post('/user', formData);

const addEnergyRecord = (data) => api.post('/energy-records', data); // Ensure data is already in JSON format here
const getEnergyRecords = () => api.get('/energy-records');
const updateEnergyRecord = (id, data) => api.put(`/energy-records/${id}`, data); // Ensure data is already in JSON format here
const deleteEnergyRecord = (id) => api.delete(`/energy-records/${id}`);

const getEnergyTrends = () => api.get('/energy-trends');
const getEnergyInsights = () => api.get('/energy-insights');

const getUserProfile = () => api.get('/user/profile');
const updateUserProfile = (data) => api.put('/user/profile', data); // Ensure data is already in JSON format here
const uploadProfilePicture = (formData) => api.post('/user/profile-picture', formData);

export { 
  login, 
  register, 
  addEnergyRecord, 
  getEnergyRecords, 
  updateEnergyRecord, 
  deleteEnergyRecord, 
  getEnergyTrends, 
  getEnergyInsights, 
  getUserProfile, 
  updateUserProfile, 
  uploadProfilePicture 
};
