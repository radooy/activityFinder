const router = require("express").Router();
const moment = require("moment");
const publicationService = require("../services/publicationService");
const { isAuth } = require("../middlewares/auth");

router.post("/create", isAuth , (req,res)=>{
    let id = req.user.id;

    let { nameOfUser, sport, date, description, countOfPeople, city, phoneNumber, imgUrl } = req.body;
    let dateFormated = moment(new Date(date)).format("DD.MM.YYYY hh:mm:ss");

    publicationService.create(id, nameOfUser, sport, dateFormated, description, countOfPeople, city, phoneNumber, imgUrl)
        .then(pub => {
           res.status(201).json({_id: pub._id});
        })
        .catch(err => {
            console.log(err.message);
            res.status(409).json({err: err.message});
        });
});

module.exports = router;