const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const connection = require('./database');
const conn = require("./database_pg")
const User = connection.models.User;

// TODO: passport.use();