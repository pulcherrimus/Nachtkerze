document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;

    // Check if username exists
    if (localStorage.getItem(username) !== null) {
        // Check if password matches
        if (localStorage.getItem(username) === btoa(password)) {
            // Login successful
            document.getElementById('login-message').innerText = 'Login successful';

            // Store login state and user info
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('loggedInUser', username);
            
            // Set token count if not already set
            if (!localStorage.getItem('tokenCount')) {
                localStorage.setItem('tokenCount', 0);
            }

            // Redirect to home page
            window.location.href = 'home.html';
        } else {
            document.getElementById('login-message').innerText = 'Invalid password';
        }
    } else {
        document.getElementById('login-message').innerText = 'User does not exist';
    }
});
