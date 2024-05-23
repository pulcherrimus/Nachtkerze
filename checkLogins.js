// checkLogin.js

// Check if user is not logged in, then redirect to login page
if (!localStorage.getItem('loggedInUser')) {
    window.location.href = 'login.html';
}
