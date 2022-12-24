const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  email:{type:String,required:true},  
  category: { type: String, required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
},{timestamps:true});

const ticketModel = mongoose.model("Ticket", ticketSchema);
module.exports = ticketModel;
