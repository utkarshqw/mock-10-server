const express = require("express");
const bookmarkModel = require("../Schema/Bookmark.model");
const productModel = require("../Schema/Product.model") 
const app = express.Router();

app.get("/",async(req,res)=>{
    var x = await productModel.find()
    res.send(x)
})


app.delete("/delete",async(req,res)=>{
    var {_id} = req.body
    var x  = await productModel.findByIdAndDelete(_id)
    res.send("deleted")
})

app.post("/bookmark",async(req,res)=>{

    let newproduct = new bookmarkModel(req.body)
    await newproduct.save()
    res.send("success")

})


app.post("/add",async(req,res)=>{
    
      
    let newproduct = new productModel(req.body)
    await newproduct.save()
    res.send("success")


})


module.exports = app