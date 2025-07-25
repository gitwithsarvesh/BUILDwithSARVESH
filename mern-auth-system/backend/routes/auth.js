const express = require('express');
const { body } = require('express-validator');
const {
  register,
  login,
  verifyEmail,
  forgotPassword,
  resetPassword,
  getMe
} = require('../controllers/authController');
const auth = require('../middleware/auth');

const router = express.Router();

// Register
router.post('/register', [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Please include a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
], register);

// Login
router.post('/login', login);

// Verify email
router.get('/verify-email/:token', verifyEmail);

// Forgot password
router.post('/forgot-password', forgotPassword);

// Reset password
router.put('/reset-password/:resettoken', resetPassword);

// Get current user (protected route)
router.get('/me', auth, getMe);

module.exports = router;