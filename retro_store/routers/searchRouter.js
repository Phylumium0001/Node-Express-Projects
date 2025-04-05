const {Router} = require("express")
const db = require("../model/queries")

const searchRouter = Router()

searchRouter.get("/",async (req,res)=>{
    console.log("Searching...");
    try {
        const searchParam = req.query.name.toLowerCase()
        console.log(searchParam);
        
        const items = await db.getByName(searchParam)
        const rows = await items.rows
        const rowCount = await items.rowCount
        console.log(rows);
        
        res.render("searchResults",{title:"Search",items:rows,searchParam:searchParam,rowCount})

    } catch (error) {
        console.error(`Fetching data failed : ${error}`);
        res.status(500).send("Internal Servers Down")
    }
})

module.exports = searchRouter