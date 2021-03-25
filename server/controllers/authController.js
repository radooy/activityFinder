const router = require("express").Router();
const authService = require("../services/authService");

router.post("/register", (req,res)=>{
    let {username, password, rePassword, city} = req.body;
    if (password!==rePassword) {
        res.status(409).json({message: "Password and Repeat Password fields should match!"});
        return;
    }

    authService.register(username, password, city)
        .then(createduser=>{
            res.status(201).json({_id: createduser._id});
        })
        .catch(err=>{
            res.status(409).json({message: err.message});
        });
});

router.post("/login", (req,res)=>{
    let {username, password} = req.body;
    authService.login(username,password)    
        .then(({token, id, username, city})=>{
            res.status(200).json({token, username, id, city}); //if needed for client localStorage
        })
        .catch(err=>{
            console.log(err.message);
            res.status(401).json({message: err.message});
        });
})



module.exports = router;