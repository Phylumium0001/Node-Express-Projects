const {Router} = require("express")

const homeRouter = Router()

homeRouter.get("/",(req,res)=>{
    console.log("Home");
})


module.exports = homeRouter