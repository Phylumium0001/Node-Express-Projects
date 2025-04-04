const {
    Router
} = require("express");

const homeRouter = Router()
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
    },
    {
        name : "Add Book",
        url : "/books/new"
    }
]
homeRouter.get("/", (req, res) => {
    res.render("home", {
        title: "Home",
        links: links
    })
})

module.exports = homeRouter
