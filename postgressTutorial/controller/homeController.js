const db = require("./userQuery")
const displaySearchController = require("../controller/displaySearchController")

function determinePath(req,res) {
    const query = req.query["search"]
    
    console.log(query);

    if (!query){
        console.log("Home");
        db.getAllUserNames(req,res)
    }else{
        console.log("Searching for parameters");
        displaySearchController(req,res)
    }
    
}
// function showPageController(req,res) {
//     console.log("Home");
//     db.getAllUserNames(req,res)
    
// }
// function searchController(req, res){
//     console.log("Post request");  
//     const search = req.body["search"]

//     // Display the search Results page
//     res.redirect(`\?search=${search}`)
// }

// module.exports = {showPageController,searchController}
module.exports = determinePath