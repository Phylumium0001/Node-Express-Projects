const express = require("express")
const { v4 } = require("uuid")
const registerUser = require("../authUtils/registerUser")

const signup = express.Router()

signup.get("/signup", (req, res) => {
  // Signing Up a new user
  res.render("signup")
})

signup.post("/signup", (req, res) => {
  const data = req.body

  // SignUp User
  const id = v4()
  if (registerUser(id, data.username, data.password)) {
    res.redirect(200, "/")
  } else { res.redirect(301, "/signup") }

})



module.exports = signup
