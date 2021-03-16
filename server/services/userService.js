const User = require("../models/User");
const Publication = require("../models/Publication");

async function getOne(_id) {
    let user = await User.findById(_id);
    return user;
}

function getUserPublications(userId){
    return Publication
                .find({creator: userId})
                .lean();
}

function remove(userId){
    return User.findByIdAndRemove(userId);
}

module.exports = {
    getOne,
    getUserPublications,
    remove
}