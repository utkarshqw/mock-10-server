const mongoose = require("mongoose")

const bookmarkSchema = new mongoose.Schema({
title:{type:String, required: true},
qty:{type:Number,required:true},
pty:{type:String},
desc:{type:String,required:true},
date:{type:String}

},{timestamps:true})

const bookmarkModel = mongoose.model("Bookmark",bookmarkSchema)
module.exports =   bookmarkModel;
