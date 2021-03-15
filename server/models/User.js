const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = require("../config/config");
const { MONGOOSE_USERNAME_VALIDATION , MONGOOSE_PASSWORD_VALIDATION } = require("../utils/errorMessages");

const cities = require("../utils/citiesData")();

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        validate:{
            validator: function(value){
                return /^[a-z0-9._-]{4,16}$/.test(value);
            },
            message: MONGOOSE_USERNAME_VALIDATION
        },
        trim: true,
        required: [true, "Please enter username!"],
        unique: true
    },
    password: {
        type: String,
        validate:{
            validator: function(value){
                return /^[a-z0-9]{6,16}$/.test(value);
            },
            message: MONGOOSE_PASSWORD_VALIDATION
        },
        required: [true, "Please enter password!"],
    },
    city: {
        type: String,
        enum: cities,
        required: true,
    },
    publicationsMade: [{
        type: mongoose.Types.ObjectId,
        ref: "Publication"
    }],
    publicationsAppliedFor: [{
        type: mongoose.Types.ObjectId,
        ref: "Publication"
    }]
});

UserSchema.pre("save", function (next) {
    bcrypt.genSalt(Number(SALT_ROUNDS))
        .then(salt => bcrypt.hash(this.password, salt))
        .then(hashedPass => { 
            this.password = hashedPass;
            next();
        });
});

module.exports = mongoose.model("User", UserSchema);