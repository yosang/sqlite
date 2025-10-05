const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database(process.env.DB_NAME, (err) => {
    if(err) return console.log('Unable to connect to database', err.message);
    
    console.log('Database connected');
});

const sql = `
    CREATE TABLE IF NOT EXISTS user(
    id INTEGER PRIMARY KEY,
    name VARCHAR NOT NULL,
    email VARCHAR NOT NULL
    );
`

// db.exec(sqlString [, callback]) can run multiple SQL statements in a single string separated by semicolons and its used for RAW SQL
// db.run(sqlString [, params [, callback]]) can only run one SQL statement and supports params, such as ?, :name or @name so its safer against SQL injections
// In practice, db.exec is good for bulk schema setup while db.run for usual queries
db.exec(sql, (err) => {
    // Handle error
    if(err) return console.log('Database table creation failed', err.message)

    console.log('Database table creation successful')
})

module.exports = db;