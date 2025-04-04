const pool = require("./pools")

async function getAllUserNames() {
    const {rows} = await pool.query("SELECT * FROM usernames")
    return rows
}

async function insertUserName(username) {
    await pool.query("INSERT INTO usernames (username) VALUES ($1)",[username])
}

async function searchUser(username) {
    const result = await pool.query("SELECT * FROM usernames WHERE username=($1)",[username])
    return (result["rowCount"],result["rows"])
}

module.exports = {
    getAllUserNames,
    insertUserName,
    searchUser
}