const router = require("express").Router()
const registerUser = require("../authUtils/registerUser")

router.get('/signup', (req, res) => {
  res.render('auth/signup', {
    title: 'Get Clearance',
    error: null
  });
})

router.post("/signup",(req,res)=>{
  try {
    const data = req.body

    const firstname = data.firstname
    const lastname = data.lastname
    const email = data.email
    const password = data.password

    if (registerUser(firstname,lastname,email,password)){
      res.redirect("/login")
    }else{
      res.redirect("/signup")
    }
    
  } catch (err) {
    console.log("Creating User")
    console.log(err)
    
  }
})
module.exports = router
