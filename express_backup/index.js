const express = require('express')
const homeRouter = require("./routes/home.js")
const app = express()
const PORT = 5000

//app.get("/",(req,res)=>{
//  res.send("<h1>Home Page</h1>")
//
//})
//app.get("/:username/account",(req,res)=>{
//  console.log(req.params)
//})

// Home Route
app.get("/", home)


app.listen(PORT,()=>{console.log(`Server started at https://localhost:${PORT}`)})
