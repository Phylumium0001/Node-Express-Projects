const conn = require("./connection")
const fs = require('fs');
const path = require('path');
//
// Read the SQL file
const sqlFilePath = path.join(__dirname, 'queries.sql');
const sql = fs.readFileSync(sqlFilePath, 'utf8');

// Execute the SQL
(async () => {
  try {
    console.log('Running SQL script...');
    await conn.query(sql);
    console.log('SQL script executed successfully');
  } catch (err) {
    console.error('Error executing SQL:', err);
  }
})();
