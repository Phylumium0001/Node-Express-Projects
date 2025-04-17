const db = require("../model/queries")
const {Router} = require("express")
const deleteRouter = Router()

deleteRouter.get("/:id",async (req,res) => {
  try {
    // Delete item
    const id = Number(req.params.id)
    console.log(id)
    if(!isNaN(id)){ 
      await db.deleteById(id) 
      console.log(`Deleted ${id}`)
      res.redirect("/")
    }else{
      console.error(`From Controller : ${error}`);
    }
    
  } catch (err) {
    console.error(err);
  }
})


module.exports = deleteRouter
