const router = require("express").Router();
const userService = require("../services/userService");

router.get("/:userid", (req,res)=>{
    let id = req.params.userid;
    userService.getOne(id)
        .then(user=>{
            res.status(200).json({user});
        })
        .catch(err=>{
            console.log(err.message);
            res.status(404).json({err: "User not found!"});
        })
})

router.get("/:userId/publicationsMade", (req,res)=>{
    let userId = req.params.userId;
    userService.getUserPublications(userId)
        .then(pubs=>{
            res.status(200).json({publications: pubs});
        })
        .catch(err=>{
            console.log(err.message);
            res.status(404).json({err: "User or publications not found"});
        })
});

module.exports = router;