// src/services/logoutService.js

const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  };
  
  export default {
    logout,
  };
  