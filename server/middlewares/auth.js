const jwt = require('jsonwebtoken');
const { SECRET } = require("../config/config")

function auth(req, res, next) {

    //With jwt and try-catch token stored in clients localStorage
    let authHeader = req.get('Authorization');
    if (authHeader) {
        let token = authHeader.split(' ')[1];
        try {
            let decoded = jwt.verify(token, SECRET );
            req.user = decoded;
        } catch (err) {
            return next(); //error possible -  you are not authorized, fake token
        }
    }
    
    //With cookie and callback
    // let tokenFromCookie = req.cookies["AuthCookie"];

    // if (tokenFromCookie) {
    //     jwt.verify(tokenFromCookie, SECRET, function(err,decoded){
    //         if (err) {
    //             res.clearCookie("AuthCookie");
    //         }else{
    //             req.user = decoded;
    //         }
    //     });
    // }

        //dummy code for backend postman test

        // req.user = {
        //     id:"60548fce0f44872b483a824c",
        // }
    
    next();
};

function isAuth(req, res, next) {
    if (!req.user) {
        res.status(401).json({err: "You are not authorized!"});
        return;
    }
    next();
};

module.exports = {
    isAuth,
    auth
}