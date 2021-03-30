const router = require("express").Router();
const authService = require("../services/authService");
const jwt = require('jsonwebtoken');
const { SECRET } = require("../config/config")

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

router.post("/verify", (req,res,next) => {
    let isVerified = false;
    let tokenFromCookie = req.cookies["x-auth-token"];
    console.log(`isVerified token from cookie: ${tokenFromCookie}`)
    if (tokenFromCookie) {
        jwt.verify(tokenFromCookie, SECRET, function(err,decoded){
            if (err) {
                res.clearCookie("x-auth-token"); //fake cookie/token
                res.json({isVerified});
                return;
            }else{
                let username = decoded.username;
                let id = decoded.id;
                let city = decoded.city;
                isVerified = true;
                res.status(200).json({username,id,city, isVerified})
                return;
            }
        });
    }else{
        res.json({isVerified});
    }
})



module.exports = router;