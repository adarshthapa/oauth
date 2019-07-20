const router = require('express').Router();

// Auth Login
router.get('/login', (req, res) => {
    res.render('login');
})

// Auth Logout
router.get('/logout', (req, res) => {
    res.send('Logging out');
})

// OAuth: Google
router.get('/google', (req, res) => {
    res.send('Logging in with Google')
})

module.exports = router;
