const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2');
const keys = require('./keys');
const User = require('../models/User');

passport.use(new GoogleStrategy({
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    console.log('Passport callback function called');
    console.log(profile);
    new User({
        email: profile.email,
        username: profile.displayName,
        googleId: profile.id
    }).save().then((newUser) => {
        console.log(`New user created: ${newUser}`);
    })
})
)



