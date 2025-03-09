const http = require("http")
const fs = require("fs")
const path = require("path")
const url = require("url")

const PORT = process.env.PORT || 8000

const server = http.createServer((req,res)=>{
  const link = new URL(`http://localhost:${PORT}${req.url}`)

  if (req.url === "/"){
    // Read file
    fs.readFile(
      path.join(__dirname,"public","index.html"),
      ("utf8"),
      (err,data)=>{
        if (err){throw err}
        res.writeHead(200,{"content-type":"text/html"})
        res.end(data)
      }
  )
  }
  else if (req.url === "/about"){
    // Read file
    fs.readFile(
      path.join(__dirname,"public","about.html"),
      ("utf8"),
      (err,data)=>{
        if (err){throw err}
        res.writeHead(200,{"content-type":"text/html"})
        res.end(data)
      }
  )
  }else if (req.url === "/contact"){
    // Read file
    fs.readFile(
      path.join(__dirname,"public","contact.html"),
      ("utf8"),
      (err,data)=>{
        if (err){throw err}
        res.writeHead(200,{"content-type":"text/html"})
        res.end(data)
      }
  )
  }else {
    // Read file
    fs.readFile(
      path.join(__dirname,"public","404.html"),
      ("utf8"),
      (err,data)=>{
        if (err){throw err}
        res.writeHead(200,{"content-type":"text/html"})
        res.end(data)
      }
  )
  }
})
server.listen(PORT, ()=>{console.log(`Connected to port : ${PORT}`)})
