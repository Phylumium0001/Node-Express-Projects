const path = require("node:path")
const {Pool} = require("pg")
const express = require("express")
const session = require("express-session")
const passport = require("passport")
const LocalStrategy = require("passport-local")
const bcrypt = require("bcryptjs")

const pool = new Pool({
  'database':'retro_store',
  'password':'Xenon_121',
  'port': 5432,
  'host':'localhost',
  'user':'postgres'
})

const app = express()
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")

app.use(session({secret:"cat",resave:false,saveUninitialized:false}))
app.use(passport.session())
app.use(express.urlencoded({extended:false}))


// Setup the localStrategy - username and password
passport.use(
    new LocalStrategy(async (username, password, done) => {
        // This is the middleware function called to authenticate the user
        try {
            const { rows } = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
            const user = rows[0];
            const passwordMatch = await bcrypt.compare(password,user.password) 
            console.log(password,user.password)

            if (!user) {
                return done(null, false, { message: "Incorrect username" });
              }
            // if (user.password !== password) {
            if (!passwordMatch){
                return done(null, false, { message: "Incorrect password" });
              }
            return done(null, user);
          } catch(err) {
            return done(err);
          }
    })
)

// Serializer
// Function passport uses to serialize a user
// How the cookies will be saved
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserializer
// Function passport uses to deserialize a user
passport.deserializeUser(async (id, done) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    const user = rows[0];

    done(null, user);
  } catch(err) {
    done(err);
  }
});

// Home
app.get('/',async (req,res)=>{
  // get users
  users = await pool.query("SELECT * FROM users")
  console.log(req.user)
  res.render("index",{users:users.rows,user:req.user})
})

// Sign In
app.get("/sign-in",(req,res)=>{
  res.render("sign-in-form")
})

app.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/"
  })
);

// Sign Up
app.get("/sign-up",(req,res)=>{res.render("sign-up-form")})

app.post("/sign-up", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password,10)
    await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
      req.body.username,
      hashedPassword,
    ]);
    res.redirect("/");
  } catch(err) {
    return next(err);
  }
});

// Sign out
app.get('/log-out',(req,res,next)=>{
  req.logout((err)=>{
    if (err){
      return next(err)
    }else{
      res.redirect("/")
    }
  }) 
})

app.listen(5000,()=>console.log(`Server Created at port 5000`))
