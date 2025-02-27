// Selecting DOM elements for login, register, and forgot password functionality
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
// let loginForm = document.querySelector('.login-form-container');
// let formClose = document.querySelector('#form-close');
const loginForm = document.querySelector('.login-form-container');
const formClose = document.querySelector('#form-close');

// Handle search bar toggle (optional)
window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
};

// Toggle search button active state
searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBtn.classList.toggle('active');
});

function openLoginForm() {
    loginForm.classList.add('active');  // Add the 'active' class to show the form
}

// Close the login form when the close button is clicked
formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');  // Remove the 'active' class to hide the form
});

formBtn.addEventListener('click', openLoginForm);

// Handle form submission
let loginFormElement = document.querySelector('#login-form');  // Your login form

loginFormElement.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Login Form Submitted");
});

// Optional: Open the login form on a button click (you need to define the button trigger)
// document.querySelector('#open-login-btn').addEventListener('click', openLoginForm);

// // Open login form when login button is clicked
// formBtn.addEventListener('click', () => {
//     loginForm.classList.add('active');
// });

// // Close login form when close button is clicked
// formClose.addEventListener('click', () => {
//     loginForm.classList.remove('active');
// });

// // New code for login form functionality
// let loginFormElement = document.querySelector('#login-form');  // Your login form

// loginFormElement.addEventListener('submit', (e) => {
//     e.preventDefault();
//     alert("Login Form Submitted") ; // Prevent the default form submission

    // Get form data
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    // Basic validation (you can improve this)
    if (!email || !password) {
        alert("Please fill out both fields.");
        return;
    }

    // The form submission code goes here
let loginFormElement = document.querySelector('#login-form');  // Your login form

loginFormElement.addEventListener('submit', (e) => {
  e.preventDefault();  // Prevent the default form submission

  // Get form data
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;

  // Basic validation (you can improve this)
  if (!email || !password) {
    alert("Please fill out both fields.");
    return;
  }


    // Example of handling 'remember me'
    let rememberMe = document.querySelector('#remember').checked;

    // Making the POST request to the backend
  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
      remember: rememberMe,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message === 'Login successful') {
        alert('Login successful');
      } else {
        alert('Invalid email or password');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('An error occurred during login');
    });
});

    // For now, log the form data to the console (replace with real logic later)
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember me:", rememberMe);

    // Here you can add the functionality for authenticating the user
    // For example, make an API call to your server using fetch or axios

    // After successful login, close the form or clear it
    loginForm.classList.remove('active');
});

// Functionality for Register and Forgot Password Links
document.querySelector('.login-form-container form a[href="register.html"]').addEventListener('click', function(e) {
    e.preventDefault();  // Prevent default action to manage dynamic page transitions
    window.location.href = 'register.html';  // Redirect to the register page
});

document.querySelector('.login-form-container form a[href="forgot-password.html"]').addEventListener('click', function(e) {
    e.preventDefault();  // Prevent default action to manage dynamic page transitions
    window.location.href = 'forgot-password.html';  // Redirect to the forgot password page
});

// Handle Register form (Add similar functionality in the register.html page)
let registerFormElement = document.querySelector('#register-form');  // Your register form

if (registerFormElement) {
    registerFormElement.addEventListener('submit', (e) => {
        e.preventDefault();  // Prevent the default form submission

        // Get form data for registration
        let username = document.querySelector('#username').value;
        let email = document.querySelector('#email').value;
        let password = document.querySelector('#password').value;

        // Basic validation (you can improve this)
        if (!username || !email || !password) {
            alert("Please fill out all fields.");
            return;
        }

        // Example of handling registration
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);

        // Handle the registration logic (e.g., API request)

        // Clear form or redirect after successful registration
        alert("Registration Successful!");
        window.location.href = 'login.html';  // Redirect to login page
    });
}

// Handle Forgot Password form (Add similar functionality in the forgot-password.html page)
let forgotPasswordFormElement = document.querySelector('#forgot-password-form');  // Forgot password form

if (forgotPasswordFormElement) {
    forgotPasswordFormElement.addEventListener('submit', (e) => {
        e.preventDefault();  // Prevent the default form submission

        // Get the email from forgot password form
        let email = document.querySelector('#email').value;

        // Basic validation
        if (!email) {
            alert("Please enter your email.");
            return;
        }

        // Example of handling forgot password (e.g., sending email for reset link)
        console.log("Email for reset:", email);

        // Simulate sending email for password reset
        alert("Password reset link has been sent to your email.");
        window.location.href = 'login.html';  // Redirect to login page after successful request
    });
}
