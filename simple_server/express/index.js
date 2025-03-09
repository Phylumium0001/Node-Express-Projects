const express = require('express')
const app = express()
const PORT = 5000

app.get("/",(req,res)=>{
  res.send("<h1>Home Page</h1>")

})
app.get("/about",(req,res)=>{
  const parameters = req.params()
  console.log(parameters)
})
app.listen(PORT,()=>{console.log(`Server started at https://localhost:${PORT}`)})
