const {Router} = require("express")
const db = require("../model/queries")

const gameRouter = Router()

gameRouter.get("/", async (req, res) => {
    console.log("Games");
    try {
        const items = (await db.getGamesOnly()).rows;
        
        res.render("categories", { items: items, title: "Games" });
    } catch (error) {
        console.error("Error fetching items:", error);
        res.status(500).send("Internal Server Error");
    }
});

gameRouter.get("/:id", async (req, res) => {
    const id = (req.params.id)
    // Check if it is a number
    const item = await db.getById(id)
    res.render("itemDisplay",{title:"Game",item:item.rows[0]})
    
    // try {
    //     const id = parseInt(req.params.id)
    //     console.log(`Fetching item with id ${id}`);
        
    //     if (!isNaN(id)){
    //         const item = await db.getById(id)
    //         // res.send(item.rows)
            
    //         res.render("itemDisplay",{title:item.name,item:item})

    //     }else{
    //         console.log(`Error : Searching for NaN`);   
    //     }
        
        
    // } catch (error) {
    //     console.error("Error fetching item:", error);
    //     res.status(500).send("Internal Server Error");
    // }
})


module.exports = gameRouter
