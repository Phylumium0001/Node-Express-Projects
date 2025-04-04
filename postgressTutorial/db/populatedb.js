#! /usr/bin/env node
const {Client} = require("pg")

const QUERY = `
CREATE TABLE IF NOT EXISTS usernames (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(255)
);

INSERT INTO usernames (username) VALUES 
('John'),
('Morris'),
('Jolies'),
('Ghost'),
('Newt');
`

async function main() {
    console.log("Seeding... ")
    const client = new Client({
        connectionString:"postgresql://postgres:Xenon_121@localhost:5432/top_users"
    })
    await client.connect()
    await client.query(QUERY)
    await client.end()

    console.log("Population done")
}
main()