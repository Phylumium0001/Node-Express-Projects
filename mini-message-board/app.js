const { randomUUID } = require("crypto")
const express = require("express")
const path = require("path")
const app = express()

app.set("view engine","ejs")
app.set("views", path.join(__dirname,"views"))

app.use(express.urlencoded())

const assetPath = path.join(__dirname,"public")
app.use(express.static(assetPath))

// Create an array of objects with title and description
const messages = [
    {
        title: "Introduction to JavaScript",
        description: "A beginner's guide to understanding the basics of JavaScript, including syntax, variables, and functions.",
        id: "0392-323-234-1312",
        path:"/message/0392-323-234-1312",
    },
    {
        title: "Advanced JavaScript Concepts",
        description: "An in-depth look at closures, promises, and asynchronous programming in JavaScript.",
        id: "0392-323-234-1311",
        path:"/message/0392-323-234-1311",
    },
    {
        title: "JavaScript ES6 Features",
        description: "Explore the new features introduced in ES6, such as arrow functions, classes, and template literals.",
        id: "0392-323-234-1310",
        path:"/message/0392-323-234-1310",
    },
    // {
    //     title: "Working with the DOM",
    //     description: "Learn how to manipulate the Document Object Model (DOM) using JavaScript to create dynamic web pages."
    // },
    // {
    //     title: "JavaScript Event Handling",
    //     description: "Understand how to handle events in JavaScript, including click events, keyboard events, and more."
    // },
    // {
    //     title: "AJAX and Fetch API",
    //     description: "Discover how to make asynchronous requests to servers using AJAX and the Fetch API."
    // },
    // {
    //     title: "JavaScript Frameworks Overview",
    //     description: "A comparison of popular JavaScript frameworks like React, Angular, and Vue.js."
    // },
    // {
    //     title: "Debugging JavaScript",
    //     description: "Techniques and tools for debugging JavaScript code effectively."
    // },
    // {
    //     title: "JavaScript Best Practices",
    //     description: "Learn best practices for writing clean, maintainable, and efficient JavaScript code."
    // },
    // {
    //     title: "Introduction to Node.js",
    //     description: "An overview of Node.js and how to build server-side applications using JavaScript."
    // }
];

app.get("/",(req,res)=>{
    console.log("Home");
    res.render("pages/home", {title:"Home",messages:messages})
})

app.get("/message/:id", (req,res)=>{
    // console.log(`Parameters : `)
    // console.log(req.params);
    
    const params = req.params
    /// Find mesage
    let message = ""
    messages.forEach(itMessage => {
        if (itMessage.id === params.id)
            message = itMessage
    });
    console.log(message);
    
    res.render("pages/message",{title:"Message",message:message})
})

app.get("/new",(req,res)=>{
    res.render("pages/newMessage",{title:"New Message"})
})

app.post("/new",(req,res)=>{
    const message = req.body
    const id = randomUUID()
    message.id = id
    message.path = `/message/${id}`
    messages.push(req.body)
    console.log(message)
    res.redirect("/")
})

const PORT = process.env.PORT | 5000
app.listen(PORT, ()=>{
    console.log(`Server Initated at port : ${PORT}`)
})
