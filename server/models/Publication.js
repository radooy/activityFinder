const mongoose = require("mongoose");
const { MONGOOSE_NAME_VALIDATION, MONGOOSE_DESC_VALIDATION, MONGOOSE_PHONENUM_VALIDATION, MONGOOSE_URL_VALIDATION } = require("../utils/errorMessages");

const sports = require("../utils/sportsData")();
const cities = require("../utils/citiesData")();

const PublicationSchema = new mongoose.Schema({
    nameOfUser: {
        type: String,
        validate:{
            validator: function(value){
                return /^[A-Za-z]{2,16}$/.test(value);
            },
            message: MONGOOSE_NAME_VALIDATION
        },
        trim: true,
        required: [true, "Please enter your first name!"]
    },
    sport: {
        type: String,
        enum: sports,
        required: true
    },
    date: {
        type: Date,
        required: [true, "Please select a date!"]
    },
    description: {
        type: String,
        validate:{
            validator: function(value){
                return /^[a-zA-Z0-9 .!?"-]{8,50}$/.test(value);
            },
            message: MONGOOSE_DESC_VALIDATION
        },
        trim: true,
        required: [true, "Please enter description!"]
    },
    peopleNeeded: {
        type: Number,
        required: [true, "Please select a valid number!"],
    },
    peopleApplied:{
        type: Number,
        default: 0
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
                return /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(value);
            },
            message: MONGOOSE_URL_VALIDATION
        },
        required: [true, "Please enter URL!"]
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
});

module.exports = mongoose.model("Publication", PublicationSchema);