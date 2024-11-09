const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const memberRoutes = require('./routes/memberRoutes');  // Ensure correct path
require('dotenv').config();

const app = express();
console.log(process.env.MONGO_URI);  // Debugging step

// Middleware
app.use(cors({ origin: 'http://localhost:5173' })); // Allow requests from the frontend
app.use(bodyParser.json());  // Parses incoming requests with JSON payloads

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/members', memberRoutes);  // Register the routes for members

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

