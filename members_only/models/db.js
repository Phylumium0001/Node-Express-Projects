const { Pool } = require("pg")
const pool = new Pool({
  port:4000,
  host:"localhost",
  password:"Xenon_121",
  user:"postgres",
  database:"webdev_db"
})
