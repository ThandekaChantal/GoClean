// ===============================
// GoClean Sign Up JavaScript
// ===============================

// Password Toggle
const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {
        password.type = "text";
        togglePassword.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        password.type = "password";
        togglePassword.classList.replace("fa-eye-slash", "fa-eye");
    }

});

// Confirm Password Toggle
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
const confirmPassword = document.getElementById("confirmPassword");

toggleConfirmPassword.addEventListener("click", function () {

    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
        toggleConfirmPassword.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        confirmPassword.type = "password";
        toggleConfirmPassword.classList.replace("fa-eye-slash", "fa-eye");
    }

});

// Form Validation
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const fullName = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (
        fullName === "" ||
        email === "" ||
        phone === "" ||
        passwordValue === "" ||
        confirmPasswordValue === ""
    ) {
        alert("Please complete all fields.");
        return;
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // South African Phone Validation
    const phonePattern = /^0[6-8][0-9]{8}$/;

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid South African cellphone number.");
        return;
    }

    // Password Length
    if (passwordValue.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    // Password Match
    if (passwordValue !== confirmPasswordValue) {
        alert("Passwords do not match.");
        return;
    }

    alert("Account created successfully!");

    // Backend registration will be connected later.

    signupForm.reset();

    password.type = "password";
    confirmPassword.type = "password";

    togglePassword.classList.replace("fa-eye-slash", "fa-eye");
    toggleConfirmPassword.classList.replace("fa-eye-slash", "fa-eye");

});