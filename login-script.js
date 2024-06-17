function validateForm() {
    var email = document.getElementById("email").value;
    var errorMessage = document.getElementById("error-message");
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return false;
    }

    // Redirect to main.html after successful login
    window.location.href = "index.html";
    return false; // Prevent form submission to keep the redirection
}
