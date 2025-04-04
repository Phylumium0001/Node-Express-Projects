const displayPage = (req,res)=>{
    console.log("Create New User")
    res.render("new_user",{title:"Create New User"})
}
const createUser = (req,res)=>{
    console.log(req.body)
    res.redirect("/")
} 
module.exports = {
    displayPage,
    createUser
}
