const express = require('express')
const fs = require("fs")
const path = require("path")

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
app.get("/", (req,res)=>{
  fs.readFile(
    path.join(__dirname, "public", "index.html"),
    ("utf-8"),
    (err, data)=>{
      if (err) {throw err;}
      //res.writeHead(200,{"content-type":"text/html"})
      res.send(data)
      res.end()
    }
  )
})

app.get("/contact/:id", (req,res)=>{
  fs.readFile(
    path.join(__dirname, "public", "contact.html"),
    ("utf-8"),
    (err, data)=>{
      if (err) {throw err;}
      //res.writeHead(200,{"content-type":"text/html"})
      console.log(req.params)
      res.send(data)
      res.end()
    }
  )
})
app.listen(PORT,()=>{console.log(`Server started at https://localhost:${PORT}`)})
