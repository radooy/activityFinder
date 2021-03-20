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
            res.status(404).json({message: "User not found!"});
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
            res.status(404).json({message: "User or publications not found"});
        })
});

router.delete("/:userId/delete", (req,res)=>{
    let userId = req.params.userId;
    userService.remove(userId)  
        .then(()=>{
            res.status(200).json({message: "User deleted successfully"});
        })
        .catch(err=>{
            console.log(err);
            res.status(409).json({message: "Cannot delete user"})
        })
})

module.exports = router;