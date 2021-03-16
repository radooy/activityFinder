const Publication = require("../models/Publication");

function create(_id, nameOfUser, sport, date, description, countOfPeople, city, phoneNumber, imgUrl){
    let creator = _id;
    countOfPeople = Number(countOfPeople);
    let publication = new Publication({nameOfUser, sport, date, description, countOfPeople, city, phoneNumber, imgUrl, creator});
    
    return publication.save();
}

function getAll(){
    return Publication.find({}).lean();
}

function getOwn(userId){
    return Publication
                .find({creator: userId})
                .lean();
}

function getOne(id){
    return Publication.findById(id).lean();
}


module.exports = {
    create,
    getAll,
    getOwn,
    getOne
}