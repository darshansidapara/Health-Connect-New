const express = require('express');
const User = require('../models/user');
const { registerUser, loginUser, getAllUsers } = require('../controllers/UserControllers');
const router = express.Router();

// Register a new user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

// Retrieve all users
router.get('/users', getAllUsers);

module.exports = router;


