document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get username and password from the form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Here, you should perform an AJAX request to your server to validate the login credentials
  // For the sake of this example, let's assume the login is successful if the username is "admin" and the password is "password"
  if (username === 'admin' && password === 'password') {
    // Redirect to the dashboard page upon successful login
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid username or password. Please try again.');
  }
});
