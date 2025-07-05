const router = require("express").Router()
const passport = require("passport")

router.get('/login', (req, res) => {
  res.render('auth/login', {
    title: 'Login',
    error: null
  });
})

router.post("/login", (req,res,next)=>{console.log("Goinng");next()},passport.authenticate('local', {
  "successRedirect": "/",}),(req,res)=>{
    console.log("Logged In")
  }
)

module.exports = router
