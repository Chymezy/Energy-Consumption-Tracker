// tokenManager.js

let authToken = ''; // Global variable to store the authentication token

function setAuthToken(token) {
  authToken = token;
}

function getAuthToken() {
  return authToken;
}

function refreshToken() {
  // Implement token refresh logic here
  // Example implementation with jQuery AJAX
  $.ajax({
    url: 'http://localhost:4444/api/auth/refresh',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${authToken}`
    },
    success: function(response) {
      authToken = response.access_token; // Update the token globally
      console.log('login successfully!')
    },
    error: function(xhr, status, error) {
      console.error('Token refresh failed:', error);
      // Handle token refresh failure here (e.g., redirect to login page)
    }
  });
}
