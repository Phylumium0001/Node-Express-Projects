const express = require("express");
const { Pool } = require("pg");
const { v4 } = require('uuid')
const sessionEx = require("express-session");
const sessionPg = require('connect-pg-simple')(sessionEx);

// Create connection to pg database
const pool = new Pool({
  "hostname":"localhost",
  "port":"5432",
  "username":"postgres",
  "database":"webdev_db",
  "password":"Xenon_111"
});


const app = express();

// Create a connection with the pg database and the expressSession
const pgStore = new sessionPg({
  pool:pool,
  // tableName:"session_tables" // For overriding default
  createTableIfMissing:true
})

app.use(sessionEx({
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 1 * 24 * 60 * 60 * 1000
  },
  // Use pgStore to store sessions
  store:pgStore,
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  genid: () => { v4() }
}))

app.get("/", (req, res) => {
  console.log(req.session)
  res.sendStatus(200)
  res.cookie("remmember me","1",{maxAge:15*60*1000})
  res.send("Welcome Screen \\__(-_-)__/");
});

app.listen(5000, () => {
  console.log("Server initiated on port 5000")
});
