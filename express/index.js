const homeRouter = require("./routes/homeRouter")
const authorRouter = require("./routes/authorRouter")
const bookRouter = require("./routes/bookRouter")
const path = require("path")

const express = require("express")
const app = express()

//Ejs Setup
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))

// Sets up the body parser
app.use(express.urlencoded()); 

app.use("/",homeRouter)
app.use("/authors",authorRouter)

// Uses Ejs
app.use("/books",bookRouter)

app.use((err,req,res,next)=>{
    console.error(err);
    res.status(505).send(err.message)
    
})

const PORT = 5000
app.listen(PORT,()=>{
    console.log(`Server created at ${PORT}`)
})