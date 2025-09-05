const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// MongoDB connection options
const mongoDBURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/phan_tich_du_lieu';

// Connect to MongoDB
mongoose.connect(mongoDBURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log('Successfully connected to MongoDB!'))
  .catch(err => console.error('Unable to connect to MongoDB:', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});