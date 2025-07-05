const db = require("../models/queries")
const bcrypt = require("bcrypt")
const { v4 } = require("uuid")

function registerUser(firstname,lastname,email,password){
  // Check if user already exists in the system
  // const row = db.findOneUser(username)
  // New User
  const saltRounds = 10
  const hash = bcrypt.hashSync(password,saltRounds)

  const id = v4()
  
  const result = db.addUser(id, firstname,lastname,email, hash)

  if(result){
    return true
  }

  return false
}

module.exports = registerUser
