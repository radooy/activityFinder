const express = require("express");
const cors = require("cors");
const routes = require("../routes");

function setUp(app) {

    app.use(cors());
    app.use(express.json());
    
    app.use(routes);
};

module.exports = setUp;