const db = require("../models/database")
const bcrypt = require("bcrypt")

function registerUser(id, username,password){
  // Check if user already exists in the system
  // const row = db.findOneUser(username)
  // New User
  const saltRounds = 10
  const hash = bcrypt.hashSync(password,saltRounds)
  
  const result = db.registerUser(id, username, hash)

  if(result){
    return true
  }

  return false
}

module.exports = registerUser
