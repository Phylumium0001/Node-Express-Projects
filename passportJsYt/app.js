const express = require("express")
const routes = require("./routes/routes")

const app = express()

// Middlewares
function middleware1(req,res,next) {
  console.log(`middleware 1`)
  // Move to the next middleware in chain
  next() 
}

function middleware2(req,res,next) {
  console.log(`middleware 2`)
  next()
}

function routerMiddleware(req,res,next) {
  console.log(`Router Level middleware 1`)
  next()
}

function errorMiddleware(err,req,res,next){
  if (err){
    next(err)
  }
}

app.use(middleware2)
app.use(middleware1)

// Routes
app.get("/",routerMiddleware,(req, res,next)=>{
  res.send("Welcome to the HomePage")
  next()
})

app.get("/new",(req,res,next)=>{
  res.send("What are you creating")
})
app.use(routes)

app.listen(5000, ()=>{
  console.log(`Server running on port 5000`)
})
