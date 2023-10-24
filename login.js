
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

//Pasword Validation

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