const { Router } = require("express");
const { getAuthorById } = require("../controller/authorController")

const authorRouter = Router()
const links = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Authors",
        url: "/authors"
    },
    {
        name: "Books",
        url: "/books"
    }
]
authorRouter.get("/", (req, res) => {
    res.render("authors", {
        links: links
    })
})

// Without Controller
// authorRouter.get("/:authorId",(req,res)=>{
//     const { authorId }= req.params
//     // const queries = req.query
//     // console.log(queries)
//     res.send(`Author ID : ${authorId}`)
// })

// With controller
authorRouter.get("/:authorId", getAuthorById)

module.exports = authorRouter
