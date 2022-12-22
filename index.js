const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const puzzleRouter = require("./Routes/puzzle.router");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/puzzle", puzzleRouter);

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb+srv://utkarsh:1234@cluster0.p0u8dny.mongodb.net/puz")
  .then(() => {
    app.listen(8080, (req, res) => {
      console.log("you sever started on http://localhost:8080");
    });
  });
