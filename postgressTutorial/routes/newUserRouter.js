const {Router} = require("express")
const newUserController = require("../controller/userQuery")
const newUserRouter = Router()

newUserRouter.get("/",newUserController.insertUserNameGet)
newUserRouter.post("/",newUserController.insertUserNamePost)

module.exports = newUserRouter