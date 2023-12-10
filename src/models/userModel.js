const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    firstName: {
        type:String,
        requierd:true
    },
    lastName: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        requierd:true
    },
    address: {
        type:String
    },
    phone: {
        type:String
    }

});

const User = mongoose.model('User',userSchema);

module.exports = User;