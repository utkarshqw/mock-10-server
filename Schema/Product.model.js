const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
title:{type:String, required: true},
qty:{type:Number,required:true},
pty:{type:String},
desc:{type:String,required:true},
date:{type:String}



},{timestamps:true})

const productModel = mongoose.model("Product",productSchema)
module.exports =   productModel;
