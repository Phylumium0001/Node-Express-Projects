const {Router} = require("express")
const db = require("../model/queries")

const gameRouter = Router()

gameRouter.get("/", async (req, res) => {
    
    console.log("Games");
    try {
        const items = await db.getGamesOnly();
        const rows = items.rows
        console.log(items);
        res.render("categories", { items: rows, title: "Games" });
    } catch (error) {
        console.error("Error fetching items:", error);
        res.status(500).send("Internal Server Error");
    }
});


module.exports = gameRouter