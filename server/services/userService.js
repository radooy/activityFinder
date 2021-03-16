const User = require("../models/User");

async function getOne(_id) {
    let user = await User.findById(_id);
    if (user===null) {
        throw new Error("User not found!")
    }
    return user;
}

module.exports = {
    getOne
}