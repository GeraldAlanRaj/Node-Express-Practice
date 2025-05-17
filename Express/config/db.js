const mongoose = require('mongoose');

const db = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/express-practice', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database Connection Successful");
    }
    catch(error){
        console.log(error);
    }
};

module.exports = db;