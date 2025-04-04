const db = require("../db/queries")

async function getAllUserNames(req,res) {
    const users = await db.getAllUserNames()
    // const messages = "Messages " + users.map((user)=>{return user.username}).join(", ")
    // console.log(messages);
    res.render("home",{users:users,title:"Home"})
}

async function insertUserNameGet(req,res){
    // Render Page
    res.render("new_user",{title:'Create New User'})
};

async function insertUserNamePost(req,res) {
    const {username} = req.body
    console.log(username);
    if (username != null){
        try {
            await db.insertUserName(username)
            console.log("Success : Inserted into table");
        } catch (error) {
            console.error(error);
        }
    }else{
        console.log("Failed : Inserting into table")
    }
    res.redirect("/")
}
async function searchUser(username){
    try {
        const result = await db.searchUser(username)
        console.log(result);
        return result

    } catch (error) {
        console.error(error);
        return undefined
            
    }
}
    


module.exports = {
    getAllUserNames,
    insertUserNameGet,
    insertUserNamePost,
    searchUser
}