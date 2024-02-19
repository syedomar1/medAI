//rc071011ggmu
//HcI2MICXkjrtIEph
const express = require("express");
const mongoose = require("mongoose");
const User=require("./models/userModel.js");
const app = express();

const dbURL = "mongodb+srv://rc071011ggmu:HcI2MICXkjrtIEph@tester.y9jcw7x.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbURL);

app.listen(8080,()=>{
    console.log("server is running");
})
