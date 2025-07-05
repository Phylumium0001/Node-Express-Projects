const conn = require("./connection")

async function findOneUser(username){
  try{
    console.log(`Finding User : ${username}`)
    const row = await (conn.query(`SELECT * FROM users WHERE username='${username}'`))
    return row 
  }catch(err){
    console.log("User does not exist")
    return false
  }
}

async function registerUser(id, username, hash){
  try{
    conn.query(`INSERT INTO users (id,username,hash) VALUES ('${id}','${username}','${hash}');`)
    return true 
  }
  catch(err){
    console.log("User save : Failed")
    return false
  }
}
module.exports = {
  findOneUser,
  registerUser

}
