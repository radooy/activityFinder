const router = require("express").Router();
const moment = require("moment");
const publicationService = require("../services/publicationService");

router.post("/create", (req,res)=>{
    let { nameOfUser, sport, date } = req.body;
    let dateFormated = moment(new Date(date)).format("DD.MM.YYYY hh:mm:ss");

    publicationService.create(nameOfUser,sport,dateFormated)
        .then(publication=>{
            res.status(201).json({message : "created"})
        })
        .catch(err=>{
            console.log(err.message);
            res.status(409).json({err: err.message});
        });
});

module.exports = router;