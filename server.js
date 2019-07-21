const express = require('express');
const authRoutes = require('./routes/auth');
const passportSetup = require('./config/passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();

// view engine
app.set('view engine', 'ejs');

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
