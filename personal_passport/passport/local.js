const passport = require("passport")
const db = require("../models/database")
const LocalStrategy = require("passport-local")
const bcrypt = require("bcrypt")

// Database - user (id,username,hash)
passport.use(new LocalStrategy (async function verifyUser(username,password,cb){
  const user = (await db.findOneUser(username)).rows[0]
  console.log(user)
  
  if (!user){
    // No user found
    return cb(null,false,{message:"Incorrect username or password"})
  }

  //Compare hashes
  const results = bcrypt.compareSync(password,user.hash)

  if (results){
    console.log("User Valid")
    return cb(null,user)
  }
  // Invalid password
  console.log("Invalid Password")
  return cb(null,false,{message:"Incorrect username or password"})
 })
)

// Serializer
// Function passport uses to serialize a user
// How the cookies will be saved
passport.serializeUser((user, done) => {
  done(null, {id:user.id,username:user.username,permissions:["None"]});
});

// Deserializer
// Function passport uses to deserialize a user
passport.deserializeUser(async (user, done) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [user.id]);
    const user = rows[0];

    done(null, user);
  } catch(err) {
    done(err);
  }
});


