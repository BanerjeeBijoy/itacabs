// Placeholder for starting OTP login
function startOtpLogin() {
    alert("OTP login process started!");
    // Here you can implement the actual OTP process using an API call.
}

// Display user's name if logged in
window.onload = function() {
    const isLoggedIn = false; // Change this based on user's login status
    const userNameElement = document.getElementById('userName');
    const loginButton = document.getElementById('loginButton');

    if (isLoggedIn) {
        userNameElement.textContent = "Bijoy"; // Example name; replace with actual user data
        loginButton.style.display = 'none';
    } else {
        userNameElement.style.display = 'none';
    }
};
