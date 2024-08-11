const router = require('express').Router();
const authService = require('../services/authService');
const auth = require('../middlewares/auth');

router.post('/register', async (req, res) => {
  try {
    const user = await authService.registerUser(req.body);
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { accessToken, refreshToken } = await authService.authenticateUser(req.body);
    res.header('auth-token', accessToken).json({ accessToken, refreshToken });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post('/token', async (req, res) => {
  try {
    const { accessToken, refreshToken } = await authService.refreshTokens(req.body.token);
    res.json({ accessToken, refreshToken });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post('/logout', auth, async (req, res) => {
  try {
    await authService.logoutUser(req.user._id, req.body.token);
    res.send('Logged out successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
