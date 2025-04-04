const db = require("../db/queries")

async function displaySearchController(req,res) {
    console.log("Controller");

    const user = req.query["search"]
    console.log(`Finding ${user} ...`);
 
    try {
        const rows = await db.searchUser(user)
        console.log(rows);

        res.render("resultPage",{title:"Results",rows:rows})
    } catch (error) {
        console.error(error);        
        res.redirect("/")
    }
}


module.exports = displaySearchController