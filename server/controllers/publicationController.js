const router = require("express").Router();
const moment = require("moment");
const publicationService = require("../services/publicationService");
const { isAuth } = require("../middlewares/auth");

router.post("/create", isAuth, (req,res)=>{
    let { _id, nameOfUser, sport, date, description, countOfPeople, city, phoneNumber, imgUrl } = req.body;
    let dateFormated = moment(new Date(date)).format("DD.MM.YYYY hh:mm:ss");

    publicationService.create(_id, nameOfUser, sport, dateFormated, description, countOfPeople, city, phoneNumber, imgUrl)
        .then(publication=>{
            res.status(201).json({_id : publication._id})
        })
        .catch(err=>{
            console.log(err.message);
            res.status(409).json({err: err.message});
        });
});

module.exports = router;