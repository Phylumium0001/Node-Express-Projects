const {Router} = require("express")
const db = require("../model/queries")

const updateItemRouter = Router()

updateItemRouter.get("/:id", async (req,res)=>{
    console.log(`Fetching item`);
    const id = Number(req.params.id)
    console.log(id);
   try {
    const item = await db.getById(id).rows
    res.render("updateItem",{title:"Update Item",item:item})

   } catch (error) {
    console.error(error);
   } 
    
})

module.exports = updateItemRouter