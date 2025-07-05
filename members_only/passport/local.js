const passport = require("passport")
const queries = require("../models/queries")
const LocalStrategy = require("passport-local")
const bcrypt = require("bcrypt")

// Database - user (id,username,hash)
passport.use(new LocalStrategy(async function verifyUser(username, password, cb) {
  console.log("Local Strat")
  const user = (await queries.findUser(username)).rows[0]
  console.log(user)

  if (!user) {
    // No user found
    return cb(null, false, { message: "Incorrect username or password" })
  }

  //Compare hashes
  const results = bcrypt.compareSync(password, user.hash)

  if (results) {
    console.log("User Valid")
    return cb(null, user)
  }
  // Invalid password
  console.log("Invalid Password")
  return cb(null, false, { message: "Incorrect username or password" })
  })
)

// Serializer
// Function passport uses to serialize a user
// How the cookies will be saved
passport.serializeUser((user, done) => {
  done(null, { 'id': user.id, 'username': user.firstname+" "+user.lastname, 'ismember': user.ismember, "isadmin": user.isadmin });
});

// Deserializer
// Function passport uses to deserialize a user
passport.deserializeUser(async (user, done) => {
  try {
    const { rows } = await pool.query(`SELECT * FROM users WHERE id = "${user.id}"`);
    const result = rows[0];
    console.log(`Deserializing : `, user)

    done(null, result);
  } catch (err) {
    done(err);
  }
});


