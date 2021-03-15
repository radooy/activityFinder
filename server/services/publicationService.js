const Publication = require("../models/Publication");

function create(nameOfUser, sport, date){
    let publication = new Publication({nameOfUser,sport,date});

    return publication.save();
}

module.exports = {
    create
}