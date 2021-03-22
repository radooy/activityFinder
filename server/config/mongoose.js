const mongoose = require("mongoose");
const { ATLAS_DB_URI } = require("./config");

mongoose.connect(ATLAS_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, () => console.log("DB connected successfully!"));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = db;