const db = require("./pool")

async function createMessage(obj) {
  try {
    await db.query("INSERT INTO messages (id,title,description,link) VALUES ($1,$2,$3,$4)",[
      obj.id,
      obj.title,
      obj.description,
      obj.link
    ])  
  } catch (err) {
    console.error(err);
  }
}

async function getAllMessages() {
  try {
    const results = db.query("SELECT * FROM messages")  
    return results
  } catch (error) {
    console.error(error);
  }
}

async function getById(id) {
  try {
    const message = db.query("SELECT * FROM messages WHERE id=$1",[id])
    return message
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  createMessage,
  getAllMessages,
  getById
}
