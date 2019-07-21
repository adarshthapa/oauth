const express = require('express');
const authRoutes = require('./routes/auth');
const passportSetup = require('./config/passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

const app = express();

// view engine
app.set('view engine', 'ejs');

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}))

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// connect to MongoDB Cloud
mongoose.connect(keys.mongoDB.dbURI, () => {
    console.log('Connected to the MongoDB Cloud');
})

// Middlewares
app.use('/auth', authRoutes);

// home route
app.get('/', (req, res) => {
    res.render('home');
})

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
})
