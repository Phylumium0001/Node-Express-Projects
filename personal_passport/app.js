const express = require("express")
const app = express()
const path = require("path")
const local = require("./passport/local")
const session = require("express-session")

const dotenv = require("dotenv")
dotenv.config()

// Routes
const loginRouter = require("./routes/login")
const SignUpRouter = require("./routes/signup")
const dashboardRouter = require("./routes/dashboard")

app.set("view engine","ejs")
// Body parser setup
app.use(express.urlencoded({ extended: true }));

// Css
const assetPath = path.join(__dirname, "styles");
app.use(express.static(assetPath));


// Session Setup
app.use(session({
  secret: "my_secret_key",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 5 * 60 * 100,
  }
}))

app.get("/", (req, res) => {
  if(req.session.passport){
    console.log(req.session.passport)
    res.send(`<h1>Welcome ${req.session.passport.user.username}</h1><a href="/signup">Register</a><a href="/login">Login</a>`)
    }
  res.status(200)
  res.send(`<h1>Welcome</h1><a href="/signup">Register</a><a href="/login">Login</a>`)
})

app.use(loginRouter)
app.use(SignUpRouter)
app.use(dashboardRouter)

const port = process.env.port | 5000;

app.listen(port, () => {
  console.log(`Creating Server on port ${port}`)
})
