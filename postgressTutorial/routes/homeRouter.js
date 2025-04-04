const { Router } = require("express")
// const homeController = require("../controller/homeController")
const controller = require("../controller/homeController")
const displaySearchResults = require("../controller/displaySearchController")

const homeRouter = Router()
homeRouter.get("/",controller)
homeRouter.get("/?search=*",displaySearchResults)

module.exports = homeRouter
