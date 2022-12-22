const express = require("express");
const puzzleModel = require("../Schema/puzzle.model");
const app = express.Router();

app.post("/",async(req,res)=>{
    var {c,d,l} = req.body
   var result =  await puzzleModel.find({category:c,difficulty:d}).limit(l)
   res.send(result)
})



module.exports = app;
