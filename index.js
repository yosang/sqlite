require("dotenv").config();
const express = require('express');
const app = express();
const db = require("./db");

app.use(express.json()) // Parses incoming JSON in the req object

// Endpoints
// GET users
app.get("/", (_, res) => {
  // all for multiple rows, get for a single row
  db.all("SELECT * FROM user", (err, rows) => {
    if (err) return errHandler("500", err, res);
    // console.log(rows) // Debug: logs the returned records
    res.status(200).json({ status: 200, result: rows });
  });
});

// CREATE user
app.post('/', (req, res) => {
    const { name, email } = req.body;
    const sql = `INSERT INTO user(name, email) VALUES(?, ?)`;
    
    db.run(sql, [name, email], function(err) { // Not using an arrow function here because we are going to access the this
        if(err) return errHandler(500, err, res);

        // console.log(this.lastID) // Debug: logs the id assigned to the record

        res.status(201).end();
    })
});

// UPDATE user
// We can either do a partial or a full update that replaces the entire record
// app.put(':id', (req, res) => {
    
// });

// DELETE user
app.delete('/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM user WHERE id = ?`;

    db.run(sql, [id], function(err) {
        if(err) return errHandler(500, err, res)

        if(this.changes > 0) return res.status(204).end();

        res.status(404).json({status:404, message: 'No user found with provided id'})
    })
});

// Server startup
app.listen(process.env.PORT, (err) => {
  if (err) return console.log("Unable to start express", err.message);

  console.log("Express server is running");
});

// Error handler used in API endpoints
function errHandler(code, err, res) {
  console.log("API operaton failed", err);
  res.status(code).json({ stauts: code, message: err.message });
  return;
}
