const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   Id : {
        type : Number,
        required : true,
        unique : true
     },
   Name : {
        type : String,
        required : true
     }
})

const User = mongoose.model('User', userSchema);

module.exports = User;