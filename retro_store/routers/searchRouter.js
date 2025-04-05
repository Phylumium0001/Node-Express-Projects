const {Router} = require("express")
const searchRouter = Router()

searchRouter.get("/search",async (req,res)=>{
    console.log("Searching...");
    
})

module.exports = searchRouter