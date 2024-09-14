const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const classRoutes = require('./routes/classRoutes');
require('dotenv').config(); // Load environment variables

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes); // Separate auth routes
app.use('/api/classes', classRoutes); // Separate class routes

// Catch-all for unknown routes
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
