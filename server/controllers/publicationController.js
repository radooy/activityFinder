const router = require("express").Router();
const moment = require("moment");
const publicationService = require("../services/publicationService");
const { isAuth } = require("../middlewares/auth");

router.get("/", (req,res)=>{
    publicationService.getAll()
        .then(pubs=>{
            res.status(200).json({publications: pubs});
        })
        .catch(err=>{
            console.log(err.message);
            res.status(404).json({err: err.message});
        })
});

router.get("/:id", (req,res)=>{
        let id = req.params.id;
    publicationService.getOne(id)
        .then(pub =>{
            res.status(200).json({publication: pub});
        })
        .catch(err=>{
            console.log(err.message);
            res.status(404).json({err: err.message});
        });
});

router.get("/user/:userId", (req,res)=>{
    let userId = req.params.userId;
    publicationService.getOwn(userId)
        .then(pubs=>{
            res.status(200).json({publications: pubs});
        })
        .catch(err=>{
            console.log(err.message);
            res.status(404).json({err: err.message});
        })
})

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