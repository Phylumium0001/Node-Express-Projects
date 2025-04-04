const express = require("express");
const app = express();
const path = require("path")
const homeRouter = require("./routes/homeRouter")
const newUserRouter = require("./routes/newUserRouter")

// Ejs setup
app.set("view engine", "ejs")

// Body parser setup
app.use(express.urlencoded({extended: true}))
// Css 
const assetPath = path.join(__dirname, "styles") 
app.use(express.static(assetPath))

// Routes
app.use("/",homeRouter)
app.use("/new",newUserRouter)
// Adding a search functionality

const PORT = 5000
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
