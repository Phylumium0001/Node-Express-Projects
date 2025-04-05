const {Router} = require("express")

const editRouter = Router()

editRouter.get("/",(req,res)=>{
    console.log("Edit Item");
})


module.exports = editRouter