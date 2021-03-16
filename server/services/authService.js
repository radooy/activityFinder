const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { LOGIN_FAIL, REGISTER_USERNAME_ALREADY_IN_USE } = require("../utils/errorMessages");
const { SECRET } = require("../config/config");

async function register(username, password, city) {
    let user = await User.findOne({ username });

    if (user) {
        throw new Error(REGISTER_USERNAME_ALREADY_IN_USE);
    }

    let createdUser = new User({ username, password, city });
    return createdUser.save();
}

async function login(username, password) {
    let user = await User.findOne({ username });
    if (!user) {
        throw new Error(LOGIN_FAIL);
    }

    let isPassCorrect = await bcrypt.compare(password, user.password);
    if (!isPassCorrect) {
        throw new Error(LOGIN_FAIL);
    }

    let token = jwt.sign({id: user._id, username: user.username},SECRET,{expiresIn:"1h"});
    return {id: user._id, username:user.username, city: user.city, token};
}

module.exports = {
    register,
    login
}