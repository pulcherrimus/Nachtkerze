document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if username is available (not used yet)
    if (localStorage.getItem(username) === null) {
        // Register the user by storing username and hashed password in localStorage
        localStorage.setItem(username, btoa(password)); // Insecure, just for demonstration
        document.getElementById('register-message').innerText = 'Registration successful';
    } else {
        document.getElementById('register-message').innerText = 'Username already taken';
    }
});
