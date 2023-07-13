import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';

import User from '../models/User.js';

const signUp = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.array()[0].msg });
  }

  const { email, password, confirmPassword, username, phone, birthYear } =
    req.body;

  // rechecking
  if (
    !email ||
    !password ||
    !confirmPassword ||
    !username ||
    !phone ||
    !birthYear
  ) {
    return res.status(422).json({ message: 'Please provide all values.' });
  }

  if (password !== confirmPassword) {
    return res.status(422).json({ message: 'Entered passwords do not match.' });
  }

  const pw = await bcrypt.hash(password, 10);

  const user = new User({
    email,
    password: pw,
    username,
    phone,
    birthYear,
  });

  await user.save();

  const token = jwt.sign(
    {
      userId: user._id.toString(),
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );

  return res.status(201).json({
    message: 'User created successfully.',
    token: token,
    user: { email, username, phone, birthYear, id: user._id.toString() },
  });
};

const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.array()[0].msg });
  }

  const { email, password } = req.body;

  // rechecking
  if (!email || !password) {
    return res.status(422).json({ message: 'Please provide all values.' });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res
      .status(404)
      .json({ message: 'User with entered email is not found.' });
  }

  const pwMatch = await bcrypt.compare(password, user.password);

  if (!pwMatch) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }
  const { username, phone, birthYear } = user;
  const token = jwt.sign(
    {
      userId: user._id.toString(),
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );

  return res.status(201).json({
    message: `Welcome ${user.username}`,
    token,
    user: {
      email: user.email,
      id: user._id.toString(),
      username,
      phone,
      birthYear,
    },
  });
};

const updateUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.array()[0].msg });
  }

  const { email, password, username, phone, birthYear } = req.body;

  console.log(phone);

  // rechecking
  if (!email || !password || !username || !phone || !birthYear) {
    return res.status(422).json({ message: 'Please provide all values.' });
  }

  const pw = await bcrypt.hash(password, 10);

  const user = await User.findByIdAndUpdate(req.userId, {
    email,
    password: pw,
    username,
    phone,
    birthYear,
  });

  return res.status(201).json({
    message: 'User info updated successfully.',
    user: { email, username, phone, birthYear, id: user._id.toString() },
  });
};

export { signUp, login, updateUser };
