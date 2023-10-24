const mongoose = require("mongoose");

const PinSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:3,
        max:20,
        unique:true,
    },
    title:{
        type:String,
        required:true,
        max:50,
        unique:true,
    },
    description:{
        type:String,
        required:true,
        min:6,
    },
    rating:{
        type:Number,
        required:true,
        min:0,
        max:5,
    },
    lat:{
        type:Number,
        required:true
    },
    long:{
        type:Number,
        required:true
    },

    },{timestamps:true});

    module.exports=mongoose.model("Pin",PinSchema);