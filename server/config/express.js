const express = require("express");
const cors = require("cors");
const routes = require("../routes");
const { auth } = require("../middlewares/auth");
const cookieParser = require("cookie-parser")

function setUp(app) {
    app.use(express.urlencoded({extended:true}));
    app.use(express.json());
    app.use(cookieParser());
    app.use(cors());

    app.use(auth);

    app.use("/api", routes);
};

module.exports = setUp;