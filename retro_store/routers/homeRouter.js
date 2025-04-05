const {Router} = require("express")
const db = require("../model/queries")

const homeRouter = Router()

homeRouter.get("/",async (req,res)=>{
    console.log("Home");
    const games = await db.getGamesOnly(10)
    const consoles = await db.getConsolesOnly(10)
    console.log(games.rows);
    
    res.render("home",{title:"Home",games:games.rows, consoles:consoles.rows})
})


module.exports = homeRouter