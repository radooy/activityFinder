const User = require("../models/User");
const Publication = require("../models/Publication");

async function getOne(_id) {
    let user = await User.findById(_id);
    if (user===null) {
        throw new Error("User not found!")
    }
    return user;
}

function getUserPublications(userId){
    return Publication
                .find({creator: userId})
                .lean();
}

module.exports = {
    getOne,
    getUserPublications
}