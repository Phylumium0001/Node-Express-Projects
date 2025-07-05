const express = require('express');
const app = express();
const path = require('path');

const pool = require("./models/connection")

const local = require("./passport/local")
const session = require("express-session")
const pgSession = require("connect-pg-simple")(session)


// Routes
const signInRouter = require("./routes/login")
const signUpRouter = require("./routes/signup")
const homeRouter = require("./routes/home")
const messagesRouter = require("./routes/messages")
const membershipRouter = require("./routes/membership")

// Dotenv Setup
const dotenv = require("dotenv")
dotenv.config()

// Session Setup
app.use(session({
  secret: "my_secret_key",
  resave: false,
  saveUninitialized: false,
  store:new pgSession({"createTableIfMissing":true,"pool":pool}),
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
  }
}))

// Configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(homeRouter);

app.use(signInRouter);

app.use(signUpRouter);

app.use(messagesRouter)

app.use(membershipRouter)

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Cipher Board running on port ${PORT}`);
});
