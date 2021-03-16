const express = require("express");
const cors = require("cors");
const routes = require("../routes");
const { auth } = require("../middlewares/auth");

function setUp(app) {

    app.use(express.json());
    app.use(cors());

    app.use(auth);

    app.use("/api", routes);
};

module.exports = setUp;