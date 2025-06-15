const pg = require("pg")

const pool = new pg.Pool({
    "host":"localhost",
    "port":5432,
    "database":"webdev_db",
    "user":"xenon",
    "password":"Xenon_111"
})

pool.query("CREATE TABLE IF NOT EXISTS users(username VARCHAR(255),hash VARCHAR(255), salt VARCHAR(255));")
// pool.query("INSERT INTO users (username, hash, salt) VALUES ('Norman','password','sf2dDk!');")

async function findOne(username) {
    const result = await pool.query(`SELECT * FROM users WHERE username='${username}';`);
    return result.rows
}
async function createUser(id,username,hash,salt) {
    // console.log(`Creating User : \nid: ${id}\nusername: ${username}`);
    
    await pool.query(`INSERT INTO users (id,username,hash,salt) VALUES ('${id}','${username}','${hash}','${salt}');`)
}
async function findId(id){
    const result = await pool.query(`SELECT * FROM users WHERE id='${id}';`)
    return result.rows
}
module.exports.pool = pool
module.exports.findOne = findOne
module.exports.createUser = createUser
module.exports.findId = findId