// // login.js

// import { setAuthToken } from './tokenManager.js';

// function handleLogin(username, password) {
//   $.ajax({
//     url: 'http://localhost:4444/api/auth/login',
//     method: 'POST',
//     data: {
//       username: username,
//       password: password
//     },
//     success: function(response) {
//       setAuthToken(response.access_token);
//       // Handle successful login (e.g., redirect to dashboard)
//       window.location.href = '/dashboard.html'; // Replace with your actual dashboard URL
//     },
//     error: function(xhr, status, error) {
//       console.error('Login failed:', error);
//       // Handle login failure (e.g., display error message)
//     }
//   });
// }

// // Example event listener for login form submission
// $(document).ready(function() {
//   $('#loginForm').submit(function(event) {
//     event.preventDefault();
//     const username = $('#username').val();
//     const password = $('#password').val();
//     handleLogin(username, password);
//   });
// });


// // login.js

// function handleLogin(username, password) {
//     $.ajax({
//       url: 'http://localhost:4444/api/auth/login',
//       method: 'POST',
//       data: {
//         username: username,
//         password: password
//       },
//       success: function(response) {
//         setAuthToken(response.access_token); // Ensure setAuthToken is defined globally or included directly in this file
//         // Handle successful login (e.g., redirect to dashboard)
//         window.location.href = '/dashboard.html'; // Replace with your actual dashboard URL
//       },
//       error: function(xhr, status, error) {
//         console.error('Login failed:', error);
//         // Handle login failure (e.g., display error message)
//       }
//     });
//   }
  
//   // Example event listener for login form submission
//   $(document).ready(function() {
//     $('#loginForm').submit(function(event) {
//       event.preventDefault();
//       const username = $('#username').val();
//       const password = $('#password').val();
//       handleLogin(username, password);
//     });
//   });
  

// login.js

function handleLogin(username, password) {
    $.ajax({
      url: 'http://localhost:4444/api/auth/login',
      method: 'POST',
      contentType: 'application/json',  // Set the content type to JSON
      data: JSON.stringify({
        username: username,
        password: password
      }),
      success: function(response) {
        setAuthToken(response.access_token); // Ensure setAuthToken is defined globally or included directly in this file
        // Handle successful login (e.g., redirect to dashboard)
        window.location.href = '/dashboard.html'; // Replace with your actual dashboard URL
      },
      error: function(xhr, status, error) {
        console.error('Login failed:', error);
        // Handle login failure (e.g., display error message)
        $('#loginMessage').text('Login failed: ' + xhr.responseText || 'Unknown error');
      }
    });
  }
  
  // Example event listener for login form submission
  $(document).ready(function() {
    $('#loginForm').submit(function(event) {
      event.preventDefault();
      const username = $('#username').val();
      const password = $('#password').val();
      handleLogin(username, password);
    });
  });
  