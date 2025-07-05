const pg = require("pg")
const dotenv = require("dotenv")

dotenv.config()

// const user = process.env.user
// const host = process.env.host
// const database = process.env.database
// const password = process.env.password

const user = "postgres"
const host = "localhost"
const database = "members_only"
const password = "Xenon_111"

module.exports = new pg.Pool({
  "user" : user,
  "host" : host,
  "database" : database,
  "password" : password
})
