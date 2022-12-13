const express = require('express');
const mongoose = require("mongoose")
const cors = require("cors")
const userRouter = require("./Router/user.router")

const app = express()

// app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())

app.use("/user", userRouter);

// app.get('/',(req,res) => res.send('hello'));

mongoose
  .connect(
    "mongodb+srv://utkarsh:1234@cluster0.p0u8dny.mongodb.net/EMI"
  )
  .then(() => {
    app.listen(8080, (req, res) => {
      console.log("you sever started on http://localhost:8080");
    });
  });


