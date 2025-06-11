const express = require("express")
const crypto = require("crypto")

const expressSessions = require("express-session")

const pgSessions = require("connect-pg-simple")(expressSessions)
const pg = require("pg")

const app = express()

//  Create connection to database
const pgPool = new pg.Pool({
    "host":"localhost",
    "port":"5432",
    "database":"postgres",
    "user":"postgres",
    "password":"Xenon_111"
})

// Create channel to link the database to the express session
const pgStore = new pgSessions({
    "pool":pgPool,
    "tableName":"session",
    "createTableIfMissing":true
})

// function checkSessionId(req,res,next) {
//     result = pgPool.query(`SELECT * WHERE sid=${id}`)
//     if (result){
//         console.log("Welcome");
//     }else{
//         console.log("New session");
//     }
//     next()
// }

app.use(expressSessions({
    // Linked database to express sessions through store
    store: pgStore,
    name:"tutorial",
    genid:()=>{return crypto.randomUUID()},
    
    // Setup cookie
    cookie:{
        maxAge: 10 * 60 * 60 * 100,// Hour * minutes * seconds * milliseconds
        httpOnly:false
    },

    secret:"Naughty",
    saveUninitialized:true,
    resave:false
}))

app.get("/",(req,res)=>{
    console.log(req.session);
    // Add views
    if (req.session.viewCount){
        req.session.viewCount++
    }else{
        // First time accessing session
        req.session.viewCount = 1
    }
    // res.send("Welcome to the Sessions Tutorials")
    res.send(`You have visited ${req.session.viewCount} times`)
})

app.listen(5000, ()=>{console.log("Server Connected on port 5000");
})