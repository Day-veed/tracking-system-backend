const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const Token = require('../models/token');

// Function to generate tokens
function generateTokens(user) {
  const accessToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
  const refreshToken = jwt.sign({ _id: user._id }, process.env.JWT_REFRESH_SECRET);
  return { accessToken, refreshToken };
}

// Register user
async function registerUser({ username, email, password }) {
  if (!username || !email || !password) {
    throw new Error('Username, email, and password are required');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password: hashedPassword });
  await user.save();
  return user;
}

// Authenticate user and generate tokens
async function authenticateUser({ username, email, password }) {
  const user = await User.findOne({ $or: [{ username }, { email }] });
  if (!user) throw new Error('Invalid username/email or password');

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) throw new Error('Invalid username/email or password');

  const { accessToken, refreshToken } = generateTokens(user);
  const token = new Token({ userId: user._id, token: refreshToken });
  await token.save();
  return { accessToken, refreshToken };
}

// Refresh tokens
async function refreshTokens(refreshToken) {
  if (!refreshToken) throw new Error('Access Denied');

  const verified = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
  const token = await Token.findOne({ userId: verified._id, token: refreshToken });
  if (!token) throw new Error('Access Denied');

  const user = await User.findById(verified._id);
  const { accessToken, newRefreshToken } = generateTokens(user);
  token.token = newRefreshToken;
  await token.save();
  return { accessToken, refreshToken: newRefreshToken };
}

// Logout user
async function logoutUser(userId, refreshToken) {
  await Token.findOneAndDelete({ userId, token: refreshToken });
}

module.exports = {
  registerUser,
  authenticateUser,
  refreshTokens,
  logoutUser
};
