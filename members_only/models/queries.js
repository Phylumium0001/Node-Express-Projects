const conn = require("./connection")

async function addUser(id, firstname, lastname, email, hash){
  try {
    await conn.query("INSERT INTO users (id,firstname,lastname,email,hash) VALUES ($1,$2,$3,$4,$5)",[
      id,
      firstname,
      lastname,
      email,
      hash
    ])
    console.log("User added successfully!!!")
    return true
    
  } catch (err) {
    console.log(`Failed to add user to db : ${err}`);
  }
}

async function findUser(email){
  try {
    const result = await (conn.query(`SELECT * FROM users WHERE email='${email}'`))
    console.log("[Success] Finding User")
    return result
  } catch (err) {
    console.log(`[Failed] Finding User: ${err}`)
  }
}

async function activateMembership(userId){
  try{
    await conn.query(`UPDATE users SET ismember=TRUE WHERE id=${userId}`)
    console.log("[Success] Activating User")
  }catch(err){
    console.log("[Failed] Activating User")
  }
}

async function addMessage(messageId,userId, title, content){
  try {
    await conn.query(`INSERT INTO messages VAlUES ($1,$2,$3,$4)`,[
      messageId,
      userId,
      title,
      content
    ])
    console.log("[Success] Addin new message")
  } catch (err) {
    console.log(`[Failed] Adding new message : ${err}`)
  }
}

async function getAllMessages(){
  try {
    const result = (await conn.query(
    ` SELECT 
      m.id,
      m.content,
      m.timestamp,  -- timestamptz column
      u.firstname,     -- from joined users table
      u.lastname
    FROM messages m
    JOIN users u ON m.user_id = u.id
    ORDER BY m.timestamp DESC
  `)).rows
    console.log("[Success] Getting all messages")
    return result
  } catch (err) {
    console.log(`[Failed] Getting all messages: ${err}`)
  }
}

async function findMessageByTitle(title){
  return
}

async function findMessageByAuthor(firstname){
  return
}
//
// async function getAllMessages(membership_status){
//   // True - returns the firstname,lastname and email
//   // False - returns messages without author details
//   return
// }

// addMessage("6842c981-9e23-4023-86ea-82be46d0cbf4", "846d9094-b5ca-4858-b38f-cb402643aa28","First Message","Testing Contents (^-^)")
console.log(getAllMessages())

module.exports = {
  addUser,
  findUser,
  activateMembership,
  addMessage,
  getAllMessages,
  findMessageByAuthor,
  findMessageByTitle
}
