const express = require("express");
const userModel = require("../Schema/user.model");
const app = express.Router();

app.post("/signup",async(req,res)=>{
   var {name, email, password} = req.body
   const exist = await userModel.findOne({email});
   if(exist)
   {
    return res.send("User already exist")
   }
   
   var newuser = await userModel.create(req.body)
   res.send("Success")
})

app.post("/signin",async(req,res)=>{
    const {email, password} = req.body
    const user = await userModel.findOne({email})
    if(user)
    {
        if(user.password == password)
        {
           return   res.send(user)
        }

        res.send("wrong credentials")
        
    }

  
    
    
   
  
   
})



module.exports = app;
