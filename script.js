document.addEventListener('DOMContentLoaded', function() {
    updateLoginStatus();
});

function toggleNavbar() {
    var x = document.getElementById("navbar-links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function validateForm() {
    var email = document.getElementById("email").value;
    var errorMessage = document.getElementById("error-message");
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return false;
    }

    // Simulate successful login
    localStorage.setItem('isLoggedIn', 'true');
    updateLoginStatus();
    window.location.href = "main.html";
    return false; // Prevent form submission to keep the redirection
}

function updateLoginStatus() {
    var isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    var loginButton = document.getElementById('login-button');

    if (isLoggedIn) {
        loginButton.textContent = 'Logout';
        loginButton.href = 'javascript:void(0);';
    } else {
        loginButton.textContent = 'Login';
        loginButton.href = 'login.html';
    }
}

function handleAuthClick() {
    var isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
        localStorage.removeItem('isLoggedIn');
        updateLoginStatus();
        alert('You have been logged out.');
    } else {
        window.location.href = 'login.html';
    }
}
