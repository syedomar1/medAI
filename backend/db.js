const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/MedAI"
const connectToMongo=()=>{
    mongoose.connect(mongoURI);
    console.log("Connected to mongoose successfully");
}

module.exports = connectToMongo;