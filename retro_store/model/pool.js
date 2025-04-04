const {Pool} = require("pg")
module.exports = new Pool({
    host:"localhost",
    user:"postgres",
    database:"retro_store",
    password: "Xenon_121",
    port:5432
})