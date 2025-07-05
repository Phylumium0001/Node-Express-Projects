const dashboardRouter = require("express").Router()

function authenticate(req,res,next) {
  if (req.session){
    next()
  }else{
    console.log(req)
    req.redirect("/login")
  }
  }
dashboardRouter.get("/dashboard",authenticate,(req,res)=>{
  res.send("<h1>Dashboard<h1>")
})

module.exports = dashboardRouter
