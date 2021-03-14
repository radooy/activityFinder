const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = require("../config/config");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        validate:{
            validator: function(value){
                return /^[a-z0-9._-]{4,16}$/.test(value);
            },
            message: "Username should contain only latin letters, numbers or \"-\", \"_\", \".\" symbols, and should be between 4 and 16 characters long!"
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
            message: "Password should contain only latin letters and numbers and should be atleast 6 characters long!"
        },
        required: [true, "Please enter password!"],
    }
    //TODO: Add aditional required info for the user model
});

UserSchema.pre("save", function (next) {
    bcrypt.genSalt(SALT_ROUNDS)
        .then(salt => bcrypt.hash(this.password, salt))
        .then(hashedPass => { 
            this.password = hashedPass;
            next();
        });
});

module.exports = mongoose.model("user", UserSchema);