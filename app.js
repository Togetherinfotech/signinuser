// Handle mode switching between Sign In and Sign Up forms
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});

// Validate Sign In credentials and redirect based on the user
function validateSignIn() {
    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;

    const validCredentials = [
        { username: "Lokesh", password: "lokesh@123", redirect: "https://en.wikipedia.org/wiki/Multi-level_marketing" },
        { username: "chotu", password: "chotu1", redirect: "https://www.entrepreneur.com/encyclopedia/network-marketing" }
    ];

    const user = validCredentials.find(user => user.username === username && user.password === password);

    if (user) {
        alert("Login successful!");
        // Delay the redirection slightly to allow the alert to be dismissed
        setTimeout(() => {
            window.location.href = user.redirect;
        }, 500); // Adjust the delay if necessary
        return false; // Prevent default form submission behavior
    } else {
        alert("Invalid username or password!");
        return false; // Prevent default form submission behavior
    }
}

// Script for handling the Sign Up form submission
document.getElementById('submissionDate').value = new Date().toISOString().split('T')[0];

const scriptURL = 'https://script.google.com/macros/s/AKfycbx89RUCWiOVFgOhmTQ6skKSX2Wl9KDfkvI7YuZecuo7LRX6updm4uYZXD12xjFyHf-YQA/exec';
const form = document.forms['google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('submissionDate').value = new Date().toISOString().split('T')[0];
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            console.log('Success!', response);
            alert('Submission successful!');
            window.location.href = 'https://togetherinfotech.github.io/Thankyou/';
        })
        .catch(error => console.error('Error!', error.message));
});
