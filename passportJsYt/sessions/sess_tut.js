const express = require("express")
const expressSession = require("express-session")
const pg = require("pg")
const pgSession = require("connect-pg-simple")(expressSession)
const crypto = require("crypto")
const app = express()

const pgPool = new pg.Pool({
    "host":"localhost",
    "port":"5432",
    "database":"postgres",
    "user":"postgres",
    "password":"Xenon_111"
})
app.use(express.urlencoded())

// Defining options for session
// app.use(session({
//     secret: "secret animal",
//     cookie:{
//         maxAge : 2000,
//         httpOnly : false
//     },
//     resave:true,
//     saveUninitialized :true,
// }))


app.use(expressSession({
  genid: function(req) {
    // return crypto.randomUUID();
    return "FUUUUUUUUUCCCCCCCK"
    // return genuuid() // use UUIDs for session IDs
  },
  store:new pgSession({
    pool:pgPool,
    tableName:"session"
  }),
  name:"tutorial",
  secret: 'keyboard cat',
  resave:true,
  saveUninitialized:true,
  cookie:{
    maxAge:2000,
  }
}))

function handle(req,res,next) {
    console.log(`Session : `)
    console.log(req.session);
    
    console.log(`Cookie : `)
    console.log(req.session.cookie);
    
    if (req.session.views){
        req.session.views++
        res.writeHead(200,"Content-Type", 'text/html')
        console.log(req.session.views);
    }else{
        req.session.views = 1
    }
    next()
}

app.get("/",handle, (req, res)=>{
    res.status(200)
    res.send("Hello Welcome.")
})

app.listen(5000,()=>{"Server Initiated on 5000"})