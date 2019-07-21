const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2');
const keys = require('./keys');

passport.use(new GoogleStrategy({
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    console.log('Passport callback function called');
    console.log(profile);
})
)



