const router = require("express").Router();
const cities = require("../utils/citiesData")();
const sports = require("../utils/sportsData")();

router.get("/cities", (req,res)=>{
    res.status(200).json({cities});
});

router.get("/sports", (req,res)=>{
    res.status(200).json({sports});
});

module.exports = router;