const Publication = require("../models/Publication");

function create(_id, nameOfUser, sport, date, description, countOfPeople, city, phoneNumber, imgUrl){
    let creator = _id;
    let publication = new Publication({nameOfUser, sport, date, description, countOfPeople, city, phoneNumber, imgUrl, creator});

    return publication.save();
}

module.exports = {
    create
}