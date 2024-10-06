const express = require('express');
const path = require('path');
const app = express();

// Serve the static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Send the main file for any unknown route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
