const express = require('express');
// const mongoose = require('mongoose');
const session = require('express-session');
var passport = require('passport');
var crypto = require('crypto');
var routes = require('./routes');
const connection = require('./config/database');
const pool = require("./config/database_pg").pool

// Package documentation - https://www.npmjs.com/package/connect-mongo
// const MongoStore = require('connect-mongo')(session);

// Pg store
const pgStore = require("connect-pg-simple")(session)

// Need to require the entire Passport config module so app.js knows about it
require('./config/passport');

/**
 * -------------- GENERAL SETUP ----------------
 */

// Gives us access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax
require('dotenv').config();

// Create the Express application
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


/**
 * -------------- SESSION SETUP ----------------(
 */
app.use(session({
    secret: "naught dog",
    store: new pgStore({
        pool:pool,
        createTableIfMissing:true,
    }),
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge : 5 * 60 * 1000, // 5 mins - 5 min * seconds * milliseconds
    }
}));

// TODO

/**
 * -------------- PASSPORT AUTHENTICATION ----------------
 */

app.use(passport.initialize());
app.use(passport.session());


/**
 * -------------- ROUTES ----------------
 */

// Imports all of the routes from ./routes/index.js
app.use(routes);


/**
 * -------------- SERVER ----------------
 */

// Server listens on http://localhost:3000
app.listen(3000);