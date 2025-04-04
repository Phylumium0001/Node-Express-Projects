const {Router} = require("express")
const fs = require("fs")
const path = require("path")

const homeRouter = Router()

homeRouter.get("/",(req,res)=>{
  fs.readFile(
    path.join(__dirname,"../public","index.html"),
    "utf-8",
    (err,data) => {
	if (err){throw err}
    	res.send(data)
    }
  )
})

homeRouter.get("/",(req,res)=>{
  fs.readFile(
    path.join(__dirname,"../public","index.html"),
    "utf-8",
    (err,data) => {
	if (err){throw err}
    	res.send(data)
    }
  )
})

module.exports = homeRouter
