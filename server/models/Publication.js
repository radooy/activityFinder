const mongoose = require("mongoose");
const moment = require("moment");
const { MONGOOSE_NAME_VALIDATION } = require("../utils/errorMessages");

const sports = require("../utils/sportsData")();

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
        required: [true, "Please enter your name!"]
    },
    sport: {
        type: String,
        enum: sports,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Publication", PublicationSchema);