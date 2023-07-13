import express from 'express';
import { body } from 'express-validator';
import mongoose from 'mongoose';

import User from '../models/User.js';
import { signUp, login, updateUser } from '../controllers/AuthController.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.route('/signup').post(
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email')
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject('User with that email already exists.');
          }
        });
      })
      .normalizeEmail(),
    body('password')
      .isString()
      .withMessage('Please provide password of at least 5 characters.')
      .trim()
      .isLength({ min: 5 })
      .withMessage('Please provide password of at least 5 characters.'),
    body('confirmPassword')
      .isString()
      .withMessage('Please confirm password.')
      .trim(),
    body('username')
      .isString()
      .withMessage('Please provide valid username.')
      .trim(),
    body('phone')
      .isInt()
      .withMessage('Please provide valid phone number.')
      .isLength({ min: 7 })
      .withMessage('Please provide valid phone number.'),
    body('birthYear')
      .isInt({ min: 1900, max: 2030 })
      .withMessage('Please provide valid birth year.'),
  ],
  signUp
);

router
  .route('/login')
  .post(
    [
      body('email')
        .isEmail()
        .withMessage('Please enter a valid email')
        .normalizeEmail(),
      body('password').isString(),
    ],
    login
  );

router.route('/update-user').patch(
  authMiddleware,
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email')
      .custom((value, { req }) => {
        return User.findOne({
          email: value,
        }).then((userDoc) => {
          if (userDoc._id.toString() != req.userId) {
            return Promise.reject('User with that email already exists.');
          }
        });
      })
      .normalizeEmail(),
    body('password')
      .isString()
      .withMessage('Please provide password of at least 5 characters.')
      .trim()
      .isLength({ min: 5 })
      .withMessage('Please provide password of at least 5 characters.'),
    body('username')
      .isString()
      .withMessage('Please provide valid username.')
      .trim(),
    body('phone')
      .isInt()
      .withMessage('Please provide valid phone number.')
      .isLength({ min: 7 })
      .withMessage('Please provide valid phone number.'),
    body('birthYear')
      .isInt({ min: 1900, max: 2030 })
      .withMessage('Please provide valid birth year.'),
  ],
  updateUser
);

export default router;
