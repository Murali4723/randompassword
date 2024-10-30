const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%^&*()_+";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    // Ensures at least one of each character type
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    
    // Fills the rest of the password with random characters
    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value)
        .then(() => alert("Password copied to clipboard!"))
        .catch(() => alert("Failed to copy password."));
}
