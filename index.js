require('dotenv').config();
const app = require('express')();
const db = require('./db');

// Endpoints
    // GET users
    
    // CREATE user

    // UPDATE user

    // DELETE user

// Express runner
app.listen(process.env.PORT, (err) => {
    if(err) return console.log('Unable to start express', err.message);

    console.log('Express server is running');
});
