const bookRouter = require("express").Router()
const bookController = require("../controller/bookController")

bookRouter.get("/", bookController.getBooks)
bookRouter.get("/new",bookController.createNewBook)

bookRouter.post("/new",bookController.saveNewBook)

module.exports = bookRouter
