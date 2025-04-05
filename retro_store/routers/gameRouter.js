const {Router} = require("express")

const gameRouter = Router()

gameRouter.get("/",(req,res)=>{
    console.log("Games");
})


module.exports = gameRouter