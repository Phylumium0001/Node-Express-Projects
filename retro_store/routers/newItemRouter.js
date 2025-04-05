const {Router} = require("express")

const newItemRouter = Router()

newItemRouter.get("/",(req,res)=>{
    console.log("Creating new item");
})


module.exports = newItemRouter