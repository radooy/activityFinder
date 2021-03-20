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

async function applyUser(pubId, userId){
    let pub = await getOne(pubId);

    if (String(pub.creator)===String(userId)) {
        throw new Error("Creator isn't allowed to join his own publication!");
    }

    let countOfAppliedPeople = pub.peopleApplied.length;
    if (countOfAppliedPeople === Number(pub.peopleNeeded)) {
        throw new Error("Max number of people applied for this publication is already reached!");
    }

    let mapped = pub.peopleApplied.map(user=>user.toString()); // needed for includes check, because mongodb doesnt work as expected with array.prototype.includes(mongoId)

    if (mapped.includes(userId)) {
        throw new Error("You have already applied for this publication!");
    }

    let currentPeopleApllied = pub.peopleApplied;

    currentPeopleApllied.push(userId);

    return Publication.findByIdAndUpdate(pubId, {peopleApplied: currentPeopleApllied});
}


module.exports = {
    create,
    getAll,
    getOne,
    removeOne,
    updateOne,
    applyUser
}