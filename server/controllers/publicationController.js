const router = require("express").Router();
const moment = require("moment");
const publicationService = require("../services/publicationService");
const userService = require("../services/userService");
const { isAuth } = require("../middlewares/auth");
const User = require("../models/User");


//GET ALL FROM CITY OR SPORTS

router.get("/filter", isAuth, (req, res) => {
    console.log(req.query)
    let filterParam = req.query.city || req.query.sport;
    if(req.query.city){
        publicationService.getAllByCity(filterParam)
        .then(pubs => {
            res.status(200).json({ publications: pubs });
        })
        .catch(err => {
            console.log(err.message);
            res.status(404).json({ message: err.message });
        })
    }else if(req.query.sport){
        publicationService.getAllBySport(filterParam)
        .then(pubs => {
            res.status(200).json({ publications: pubs });
        })
        .catch(err => {
            console.log(err.message);
            res.status(404).json({ message: err.message });
        })
    }else{
        throw new Error("Filters not found")
    }
    
});

//GET ALL
router.get("/", isAuth, (req, res) => {
    publicationService.getAll()
        .then(pubs => {
            res.status(200).json({ publications: pubs });
        })
        .catch(err => {
            console.log(err.message);
            res.status(404).json({ message: err.message });
        })
});

//GET ONE
router.get("/:id", (req, res) => {
    let id = req.params.id;
    publicationService.getOne(id)
        .then(pub => {
            res.status(200).json({ publication: pub });
        })
        .catch(err => {
            console.log(err.message);
            res.status(404).json({ message: "Publication not found!" });
        });
});



//CREATE
router.post("/create", isAuth, (req, res) => {
    let id = req.user.id;
    let { nameOfUser, sport, date, description, peopleNeeded, city, phoneNumber, imgUrl } = req.body;


    let dateFormated = moment(new Date(date)).format("DD.MM.YYYY HH:mm");

    publicationService.create(id, nameOfUser, sport, dateFormated, description, peopleNeeded, city, phoneNumber, imgUrl)
        .then(pub => {
            userService.getOne(id)
                .then(user => {
                    let publicationsMade = user.publicationsMade;
                    publicationsMade.push(pub._id);
                    User.updateOne({ _id: id }, { publicationsMade })
                        .then(() => {
                            res.status(201).json({ _id: pub._id });
                        });
                });
        })
        .catch(err => {
            console.log(err.message);
            res.status(409).json({ message: err.message });
        });
});

//DELETE
router.delete("/:id", isAuth, async (req, res) => {
    let id = req.params.id;
    let userId = req.user.id;
    try {
        let pub = await publicationService.getOne(id);
        let creator = String(pub.creator);

        if (String(userId) === creator) {
            if (pub.peopleApplied.length>0) {
                pub.peopleApplied.map(uid=> userService.getOne(String(uid))
                                .then(user=>{
                                    let publicationsJoined = user.publicationsJoined;
                                    let index = publicationsJoined.indexOf(id);
                                    publicationsJoined.splice(index,1);
                                    User.updateOne({ _id: uid}, { publicationsJoined })
                                        .then(()=>{
                                            console.log("successfully deleted applied for")
                                        })
                                        .catch(err=> console.log(err.message))
                                }))
            }

            publicationService.removeOne(id)
                .then(() => {
                    userService.getOne(userId)
                        .then(user => {
                            let publicationsMade = user.publicationsMade;
                            let index = publicationsMade.indexOf(id);
                            publicationsMade.splice(index, 1);
                            User.updateOne({ _id: userId }, { publicationsMade })
                                .then(() => {
                                    res.status(200).json({ Success: "Successfully deleted!" })
                                });
                        });
                })
                .catch(err => {
                    console.log(err);
                    res.status(409).json({ message: err.message })
                })
        } else {
            res.status(401).json({ message: "You are not allowed to delete current resource!" });
        }

    } catch (error) {
        res.status(400).json({ message: "Resource not found!" });
    }


});

//EDIT
router.patch("/:id", isAuth, async (req, res) => {
    let id = req.params.id;
    let userId = req.user.id;

    try {
        let pub = await publicationService.getOne(id);
        let creator = String(pub.creator);

        console.log(String(userId) === creator);

        console.log(String(userId));
        console.log(creator);
        if (String(userId) === creator) {
            let { nameOfUser, sport, date, description, peopleNeeded, city, phoneNumber, imgUrl } = req.body;
            let dateFormated = date[2]!=="." ? moment(new Date(date)).format("DD.MM.YYYY HH:mm") : date;
            publicationService.updateOne(id, nameOfUser, sport, dateFormated, description, peopleNeeded, city, phoneNumber, imgUrl)
                .then(() => {
                    res.status(200).json({ Success: "Updated successfully!" })
                })
                .catch(err => {
                    console.log(err);
                    res.status(409).json({ message: "Cannot update current resource!" })
                });
        }else{
            res.status(401).json({ message: "You are not allowed to edit current resource!" })
        }

    } catch (error) {
        res.status(400).json({ message: "Resource not found!" });
    }


});

//APPLY USER FOR PUBLICATION
router.patch("/:id/apply", isAuth, (req, res) => {
    let id = req.params.id;
    let userId = req.user.id;

    publicationService.applyUser(id, userId)
        .then(() => {
            userService.getOne(userId)
                .then(user => {
                    let publicationsJoined = user.publicationsJoined;
                    publicationsJoined.push(id);
                    User.updateOne({ _id: userId }, { publicationsJoined })
                        .then(() => {
                            res.status(200).json({ Success: "Successfully applied for publication!" })
                        });
                });
        })
        .catch(err => {
            console.log(err);
            res.status(409).json({ message: err.message })
        });
});

//UNAPPLY USER FOR PUBLICATION
router.patch("/:id/unapply", isAuth, (req, res) => {
    let id = req.params.id;
    let userId = req.user.id;

    publicationService.unApplyUser(id, userId)
        .then(() => {
            userService.getOne(userId)
                .then(user => {
                    let mapped = user.publicationsJoined.map(pubId=>pubId.toString());
                    let index = mapped.indexOf(id);
                    let publicationsJoined = user.publicationsJoined;
                    publicationsJoined.splice(index,1);
                    User.updateOne({ _id: userId }, { publicationsJoined })
                        .then(() => {
                            res.status(200).json({ Success: "Successfully unapplied for publication!" })
                        });
                });
        })
        .catch(err => {
            console.log(err);
            res.status(409).json({ message: err.message })
        });
});

module.exports = router;