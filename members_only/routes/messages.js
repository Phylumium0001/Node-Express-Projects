const router = require('express').Router()
const queries = require("../models/queries")
const {v4} = require('uuid')

router.post("/messages",(req,res)=>{
  console.log("Messages")
  const user = req.session.passport.user
  console.log(user)
  const data = req.body
  const messageId = v4()

  queries.addMessage(messageId,user.id, data.title,data.content)
  res.redirect("/")
})

module.exports = router
