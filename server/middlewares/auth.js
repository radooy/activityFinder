const jwt = require('jsonwebtoken');
const { SECRET } = require("../config/config")

function auth(req, res, next) {
    let authHeader = req.get('Authorization');
    if (authHeader) {
        let token = authHeader.split(' ')[1];
        try {
            let decoded = jwt.verify(token, SECRET );
            req.user = decoded;
        } catch (error) {
            return next();
        }
    }
    next();
};

function isAuth(req, res, next) {
    if (!req.user) {
        res.status(401).json({err: "You are not authorized!"});
    }
    next();
};

module.exports = {
    isAuth,
    auth
}