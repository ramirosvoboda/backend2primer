const express = require('express');
const cookieParser = require('cookie-parser');
const passport = require('passport');
require('./config/passport-config');

const sessionRoutes = require('./routes/sessions');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

// Rutas
app.use('/api/sessions', sessionRoutes);

module.exports = app;