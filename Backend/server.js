// external dependencies
const express = require('express');
const connectDB = require('./config/ConnectDB'); // Make sure the path is correct and case-sensitive
const userRoutes = require('./routes/userRoutes');
const app = express();

// Load environment variables from .env file
require('dotenv').config();

// Connect to MongoDB
connectDB();

app.use(express.json());

// Define routes
app.use('/api', userRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
