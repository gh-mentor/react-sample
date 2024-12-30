/*

This file is the entry point for the server. It creates an Express server and serves the static files from the public directory. It also serves the index.html file for all the routes.

*/

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../../public')));

// Handle any requests that don't match the ones above
app.get('*', (req, res) => {
  console.log(`Request received for: ${req.url}`);
  const filePath = path.join(__dirname, '../../public/index.html');
  console.log(`Serving file: ${filePath}`);
  res.sendFile(filePath);
});

// Start the server on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
