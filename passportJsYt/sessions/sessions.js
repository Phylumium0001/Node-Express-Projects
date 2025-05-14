const express = require("express")
const session = require("express-session")

const app = express()

app.use(express.urlencoded())

// Defining options for session
app.use(session({
    secret: "secret animal",
    cookie:{
        maxAge : 60000,
        httpOnly : false
    },
    resave:true,
    saveUninitialized :true,
}))


app.get("/", (req, res,next)=>{
    console.log(req.session)
    console.log(req.session.cookie)
    if (req.session.views){
        req.session.views++
        res.writeHead(200,"Content-Type", 'text/html')
        console.log(req.session.views);
        res.end()
    }else{
        req.session.views = 1
    }
    res.send("Hello Welcome.")
})

app.listen(5000,()=>{"Server Initiated on 5000"})