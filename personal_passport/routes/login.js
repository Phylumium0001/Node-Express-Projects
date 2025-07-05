const express = require("express")
const passport = require("passport")
const login = express.Router()

login.get("/login", (req,res)=>{
  // Signing Up a new user
  res.render("login")
})

login.post("/login", passport.authenticate('local',{successRedirect:"/"}) ,(req,res)=>{
  const body = req.body
  console.log(body)
})


module.exports = login
