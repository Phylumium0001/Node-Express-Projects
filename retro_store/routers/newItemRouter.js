const {Router} = require("express")
const db = require("../model/queries")

const newItemRouter = Router()

newItemRouter.get("/",(req,res)=>{
    console.log("Creating new item");
    res.render("addItem",{title:"Add Item"})
})

// function convertCategoryToId(obj) {
//     switch (obj.category) {
//         case 'game':
//             return 1
//         case 'console':
//             return 2
//
//         default:
//             break;
//     }
// }
// const categories ={
//     "game":1,
//     "console":2
// }
//
newItemRouter.post("/",(req,res)=>{
    console.log(req.body)
    try {
        const formObj = req.body

        const newObj = {
            name:formObj.name,
            category_id:formObj.category,
            price:Number(formObj.price),
            quantity:Number(formObj.quantity),
            platform:formObj.platform,
            condition:formObj.condition,
            description : formObj.description
        }
        
        db.addItem(newObj)
        res.redirect("/")        
    } catch (error) {
        
    }
})


module.exports = newItemRouter
