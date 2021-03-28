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
    //             res.clearCookie("AuthCookie"); //fake cookie/token
    //         }else{
    //             req.user = decoded;
    //         }
    //     });
    // }

        //dummy code for backend postman test

        //creator = 60590002d8dba21e689d2f9c;
        //applier= 6055b7a3b0630c079c6eef62;

        // req.user = {
        //     id:"605f0dd1e6a01610f047e883"
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