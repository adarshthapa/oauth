const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2');
const keys = require('./keys');
const User = require('../models/User');

passport.serializeUser((user, done) => {
    done(user.id)
})
passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(user);
    })
})

passport.use(new GoogleStrategy({
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    // check if user already exists in out db
    User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
            console.log(`User is: ${currentUser}`);
            done(null, currentUser);
        } else {
            new User({
                email: profile.email,
                username: profile.displayName,
                googleId: profile.id
            }).save().then((newUser) => {
                console.log(`New user created: ${newUser}`);
                done(null, newUser);
            })
        }
    })
})
)



