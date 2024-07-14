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
        setAuthToken(response.access_token); 
        window.location.href = '/dashboard.html';
      },
      error: function(xhr, status, error) {
        console.error('Login failed:', error);
        // Handle login failure (e.g., display error message)
        $('#loginMessage').text('Login failed: ' + xhr.responseText || 'Unknown error');
      }
    });
  }
  
  // event listener for login form submission
  $(document).ready(function() {
    $('#loginForm').submit(function(event) {
      event.preventDefault();
      const username = $('#username').val();
      const password = $('#password').val();
      handleLogin(username, password);
    });
  });
  