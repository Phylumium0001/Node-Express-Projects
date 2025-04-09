const {Router} = require("express")
const db = require("../model/queries")

const editRouter = Router()

editRouter.get("/",(req,res)=>{
    console.log("Editing Item");
    res.render("editItem",{title:"Add Item"})
})

function convertCategoryToId(obj) {
    switch (obj.category) {
        case 'game':
            return 1
        case 'console':
            return 2
                
        default:
            break;
    }
}

editRouter.post("/",(req,res)=>{
    console.log(req.body)
    try {
        const formObj = req.body

        const newObj = {
            name:formObj.name,
            category_id:convertCategoryToId(formObj),
            price:Number(formObj.price),
            quantity:Number(formObj.quantity),
            platform:formObj.platform,
            condition:formObj.condition
        }
        
        db.addItem(newObj)
        res.redirect("/")        
    } catch (error) {
        
    }
})


module.exports = editRouter