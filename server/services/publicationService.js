const Publication = require("../models/Publication");

function create(_id, nameOfUser, sport, date, description, peopleNeeded, city, phoneNumber, imgUrl){
    let creator = _id;
    peopleNeeded = Number(peopleNeeded);
    let publication = new Publication({nameOfUser, sport, date, description, peopleNeeded, city, phoneNumber, imgUrl, creator});
    
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

function updateOne(id, nameOfUser, sport, date, description, peopleNeeded, city, phoneNumber, imgUrl){
    return Publication.findByIdAndUpdate(id, {nameOfUser, sport, date, description, peopleNeeded, city, phoneNumber, imgUrl});
}

async function increaseCountOfPeopleApplied(id){
    let pub= await getOne(id);

    if (Number(pub.peopleApplied) === Number(pub.peopleNeeded)) {
        throw new Error("Max number of people applied for this publication is already reached!");
    }

    let currentPeopleApllied = Number(pub.peopleApplied)+1;

    return Publication.findByIdAndUpdate(id, {peopleApplied: currentPeopleApllied});

}


module.exports = {
    create,
    getAll,
    getOne,
    removeOne,
    updateOne,
    increaseCountOfPeopleApplied
}