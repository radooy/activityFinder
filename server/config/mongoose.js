const mongoose = require("mongoose");
const { DB_URI } = require("./config");

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, () => console.log("DB connected successfully!"));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = db;