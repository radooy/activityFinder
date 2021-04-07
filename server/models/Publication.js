const mongoose = require("mongoose");
const { MONGOOSE_NAME_VALIDATION, MONGOOSE_DESC_VALIDATION, MONGOOSE_PHONENUM_VALIDATION, MONGOOSE_URL_VALIDATION } = require("../utils/errorMessages");

const sports = require("../utils/sportsData")();
const cities = require("../utils/citiesData")();

const PublicationSchema = new mongoose.Schema({
    nameOfUser: {
        type: String,
        validate:{
            validator: function(value){
                return /^([A-Z]{1})([a-z])+ ([A-Z]{1})([a-z])+$/.test(value);
            },
            message: MONGOOSE_NAME_VALIDATION
        },
        required: [true, "Please enter first and last name!"]
    },
    sport: {
        type: String,
        enum: sports,
        required: true
    },
    date: {
        type: String,
        required: [true, "Please select a date!"]
    },
    description: {
        type: String,
        validate:{
            validator: function(value){
                return /^[a-zA-Z0-9 .,!?-]{8,200}$/.test(value);
            },
            message: MONGOOSE_DESC_VALIDATION
        },
        trim: true,
        required: [true, "Please enter description!"]
    },
    peopleNeeded: {
        type: Number,
        minValue: 1,
        maxValue: 20,
        required: [true, "Please select a valid number in range from 1 to 20!"],
    },
    city: {
        type: String,
        enum: cities,
        required: true,
    },
    phoneNumber: {
        type: String,
        validate:{
            validator: function(value){
                return /^[0]{1}[0-9]{9}$/.test(value);
            },
            message: MONGOOSE_PHONENUM_VALIDATION
        },
        required: [true, "Please enter phone number!"]
    },
    imgUrl: {
        type: String,
        validate:{
            validator: function(value){
                return /^https?:\/\/(.*)$/.test(value);
            },
            message: MONGOOSE_URL_VALIDATION
        },
        required: [true, "Please enter URL!"]
    },
    peopleApplied:[{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
    creator: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
});

module.exports = mongoose.model("Publication", PublicationSchema);