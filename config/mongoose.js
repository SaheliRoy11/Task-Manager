
const mongoose = require('mongoose');

//connect to database
mongoose.connect(process.env.MONGO_URI);

//check if connection is successful
const db = mongoose.connection;

//if there is an error while connecting then throw error
db.on('error', function(err) {
    console.log(err.message);
});

//if there was no error then print success message
db.once('open', function() {
    console.log('Successful connection to database');
});

module.exports = db;