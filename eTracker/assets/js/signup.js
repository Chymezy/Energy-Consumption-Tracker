// signup.js

$(document).ready(function() {
    $('#signupForm').submit(function(event) {
      event.preventDefault();
  
      const username = $('#username').val();
      const email = $('#email').val();
      const password = $('#password').val();
      const fullName = $('#fullName').val();
      const country = $('#country').val();
      const sex = $('#sex').val();
      const userType = $('#userType').val();
  
      const signupData = {
        username: username,
        email: email,
        password: password,
        fullName: fullName,
        country: country,
        sex: sex,
        userType: userType
      };
  
      $.ajax({
        url: 'http://127.0.0.1:4444/api/user/info',
        method: 'POST',
        contentType: 'application/json',  // Set the content type to JSON
        data: JSON.stringify(signupData),
        success: function(response) {
          // Handle successful signup (e.g., redirect to login page)
          $('#signupMessage').text('Sign-up successful! Redirecting to login...');
          setTimeout(function() {
            window.location.href = 'login.html'; // Redirect to login page
          }, 2000);
        },
        error: function(xhr, status, error) {
          console.error('Sign-up failed:', error);
          // Handle signup failure (e.g., display error message)
          $('#signupMessage').text('Sign-up failed: ' + xhr.responseText || 'Unknown error');
        }
      });
    });
  });
  