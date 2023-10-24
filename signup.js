
const mobileNumberInput = document.getElementById("mobileNumberInput");
const phoneNumberFeedback = document.getElementById("Phonenumberfeedback");

mobileNumberInput.addEventListener("input", () => {
    const phoneNumber = mobileNumberInput.value;
    const isValid = validatePhoneNumber(phoneNumber);

    if (isValid) {
        phoneNumberFeedback.textContent = "Valid phone number";
        phoneNumberFeedback.style.color = "green";
    } else {
        phoneNumberFeedback.textContent = "Invalid phone number";
        phoneNumberFeedback.style.color = "red";
    }
});

function validatePhoneNumber(phoneNumber) {
    const pattern = /^(?:\d{10}|\d{3}[-.\s]\d{3}[-.\s]\d{4})$/;
    return pattern.test(phoneNumber);
}
//Email Validation
const email = document.getElementById("exampleInputEmail");
const emailfeedback = document.getElementById("emailfeedback");
exampleInputEmail.addEventListener("input", () => {
    const emailinput = email.value;
    const isValid = validateEmail(emailinput);

    if (isValid) {
        emailfeedback.textContent = "Valid email";
        emailfeedback.style.color = "green";
    } else {
        emailfeedback.textContent = "Invalid email";
        emailfeedback.style.color = "red";
    }
});
function validateEmail(emailinput) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(emailinput);
}

//Password Validation
const passwordInput = document.getElementById("exampleInputPassword1");
const strengthIndicator = document.getElementById('passwordStrength');
const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;

    if (strongRegex.test(password)) {
        strengthIndicator.textContent = 'Strong';
        strengthIndicator.className = 'strength strong';
    } else if (mediumRegex.test(password)) {
        strengthIndicator.textContent = 'Medium';
        strengthIndicator.className = 'strength medium';
    } else {
        strengthIndicator.textContent = 'Poor';
        strengthIndicator.className = 'strength poor';
    }
});
//Confirm Password
const confirmPasswordInput = document.getElementById('exampleInputPassword2');
const matchIndicator = document.getElementById('passwordMatch');
confirmPasswordInput.addEventListener('input', () =>  {
    const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password === confirmPassword) {
            matchIndicator.textContent = 'Match';
            matchIndicator.className = 'match green-text';
        } else {
            matchIndicator.textContent = 'No Match';
            matchIndicator.className = 'match red-text';
        }
});




