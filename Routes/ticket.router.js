const express = require("express");
const ticketModel = require("../Schema/ticket.model");
const app = express.Router();

app.post("/create",async(req,res)=>{
    var {category,title, message, email} = req.body
    var newticket = await ticketModel.create(req.body)
    res.send("success")
})

app.post("/alltickets",async(req,res)=>{
    var {email} = req.body 
    var tickets = await ticketModel.find({email})
    res.send(tickets)

})
app.post("/category",async(req,res)=>{
    var {category,email} = req.body
    var tickets = await ticketModel.find({email,category})
    res.send(tickets)
})



module.exports = app;
