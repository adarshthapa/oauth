const router = require('express').Router();
const passport = require('passport');

// Auth Login
router.get('/login', (req, res) => {
    res.render('login');
})

// Auth Logout
router.get('/logout', (req, res) => {
    res.send('Logging out');
})

// OAuth: Google
router.get('/google', passport.authenticate('google', {
    scope: ['email', 'profile']
}));

// Callback route
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    // res.send(req.user);
    res.redirect('/profile');
})

module.exports = router;

