// Importing the required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import CORS to allow cross-origin requests

// Creating an instance of the express app
const app = express();

// Setting the port for the server
const port = 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());  // Allows parsing of JSON data in request bodies

// Enable CORS for all routes
app.use(cors());

// POST route for handling login requests
app.post('/login', (req, res) => {
  // Destructuring the email and password from the request body
  const { email, password } = req.body;

  // Basic validation - Check if email and password match specific values
  if (email === 'test@example.com' && password === 'password123') {
    // If valid credentials, return a success response
    return res.status(200).json({ message: 'Login successful' });
  } else {
    // If invalid credentials, return an error response
    return res.status(401).json({ message: 'Invalid email or password' });
  }
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
