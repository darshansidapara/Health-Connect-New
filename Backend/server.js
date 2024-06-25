// external dependencies
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const connectDB = require('./config/ConnectDB'); // Make sure the path is correct and case-sensitive
const userRoutes = require('./routes/userRoutes');
const app = express();

// Load environment variables from .env file
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

app.use(express.json());

// Define routes
app.use('/api', userRoutes);
// Route to get calorie information
app.post('/api/calories', async (req, res) => {
   const { query } = req.body;
   const apiUrl = 'YOUR_API_URL'; // Replace with your actual API URL
   const apiKey = process.env.CALORIESCOUNT_APP_KEY;
   const apiId = process.env.CALORIESCOUNT_APP_ID;
 
   try {
     const response = await axios.get(apiUrl, {
       params: {
         q: query,
         app_id: apiId,
         app_key: apiKey,
       },
     });
     res.json(response.data);
   } catch (error) {
     res.status(500).json({ message: 'Error fetching data from external API', error: error.message });
   }
 });
 
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
