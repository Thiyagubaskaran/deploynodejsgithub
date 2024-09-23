// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Node API Service!' });
});

// Another sample route
app.get('/api', (req, res) => {
  res.json({ message: 'API endpoint is working fine!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
