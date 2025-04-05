const {Router} = require("express")

const consoleRouter = Router()

consoleRouter.get("/",(req,res)=>{
    console.log("Consoles");
})


module.exports = consoleRouter