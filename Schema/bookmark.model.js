const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({
  email:{type:String,required:true},  
  category: { type: String, required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
},{timestamps:true});

const bookmarkModel = mongoose.model("bookmark", bookmarkSchema);
module.exports = bookmarkModel;
