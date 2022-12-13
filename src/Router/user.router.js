const express = require("express")
const userModel = require("../Schema/User.model");
const app = express.Router();


app.post("/signup", async (req, res) => {
    const { email, name, password } = req.body;
  
    const existingemail = await userModel.findOne({ email });
  
    if (existingemail) {
      return res.send("user already exist");
    }
  
   
      let user = new userModel({ email, name, password });
      await user.save();
      res.send("success");
    
  });

  app.post("/signin", async (req, res) => {
    const { email, password } = req.body;
  
    var x = await userModel.findOne({ email });
  
    if (!x) {
      return res.send("user not found");
    }
  
      if (email == x.email && password == x.password) {
      res.send({ email: x.email, name: x.name, createdAt: x.createdAt, updatedAt:x.updatedAt });
      } else {
        res.send("wrong credentials");
      }

  });
  

  module.exports = app;