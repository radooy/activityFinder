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

function getOne(id){
    return Publication.findById(id).lean();
}

function removeOne(id){
    return Publication.findByIdAndRemove(id);
}

function updateOne(id, nameOfUser, sport, date, description, countOfPeople, city, phoneNumber, imgUrl){
    return Publication.findByIdAndUpdate(id, {nameOfUser, sport, date, description, countOfPeople, city, phoneNumber, imgUrl});
}


module.exports = {
    create,
    getAll,
    getOne,
    removeOne,
    updateOne
}