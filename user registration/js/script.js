document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            alert("Registered successfully!");
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            alert("Logged in successfully!");
        });
    }
});
