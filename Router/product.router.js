const express = require("express")
const productModel = require("../Schema/Product.model") 
const app = express.Router();

app.post("/add",async(req,res)=>{
    
      
    let newproduct = new productModel(req.body)
    await newproduct.save()
    res.send("success")


})


module.exports = app