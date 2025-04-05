const {Router} = require("express")

const homeRouter = Router()

homeRouter.get("/",(req,res)=>{
    console.log("Home");
    res.render("home",{title:"Home"})
})


module.exports = homeRouter