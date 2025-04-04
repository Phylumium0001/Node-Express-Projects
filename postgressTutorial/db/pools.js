const {Pool} = require("pg")
module.exports = new Pool({
    host:"localhost",
    user:"postgres",
    database:"top_users",
    password: "Xenon_121",
    port:5432
})