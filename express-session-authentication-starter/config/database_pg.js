const pg = require("pg")

const pool = new pg.Pool({
    "host":"localhost",
    "port":5432,
    "database":"webdev_db",
    "user":"xenon",
    "password":"Xenon_111"
})
