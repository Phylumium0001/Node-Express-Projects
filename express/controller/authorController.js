const db = require("../db")
const asyncHandler = require("express-async-handler")

// async function getAuthorById(req,res) {
//     const {authorId} = req.params
//     console.log(authorId)
//     const author = await db.getAuthorById(Number(authorId))
    
//     console.log(author);
    
//     if (!author){
//         res.status(404).send("Author Not found")
//         return
//     }
//     res.send(`Author Name : ${author.name}`)
// }

const getAuthorById = asyncHandler(async (req,res)=>{
    const {authorId} = req.params
    
    const author = await db.getAuthorById(Number(authorId))

    if (!author){
        res.status(404).send("Author Not Found")
        return
    }
    res.send(`Author Name : ${author.name}`)
})

module.exports = {getAuthorById}