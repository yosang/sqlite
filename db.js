const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database(process.env.DB_NAME, (err) => {
    if(err) return console.log('Unable to connect to database');
    
    console.log('Database connected');
});

module.exports = db;