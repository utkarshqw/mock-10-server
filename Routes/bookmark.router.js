const express = require("express");
const bookmarkModel = require("../Schema/bookmark.model");
const app = express.Router();

app.post("/",async(req,res)=>{
    var { email} = req.body
    var bookmarks = await bookmarkModel.find({email})
    res.send(bookmarks)
})

app.post("/add",async(req,res)=>{
    
    var newbookmark = await bookmarkModel.create(req.body)
    res.send("success")
   

})



module.exports = app;
