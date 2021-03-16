const Publication = require("../models/Publication");

function create(_id, nameOfUser, sport, date, description, countOfPeople, city, phoneNumber, imgUrl){
    let creator = _id;
    countOfPeople = Number(countOfPeople);
    let publication = new Publication({nameOfUser, sport, date, description, countOfPeople, city, phoneNumber, imgUrl, creator});
    
    return publication.save();
}

module.exports = {
    create
}