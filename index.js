const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./Routes/user.router");
const ticketRouter = require("./Routes/ticket.router");
const bookmarkRouter = require("./Routes/bookmark.router")
const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/ticket", ticketRouter);
app.use("/bookmark",bookmarkRouter)

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb+srv://utkarsh:1234@cluster0.p0u8dny.mongodb.net/ticket")
  .then(() => {
    app.listen(8080, (req, res) => {
      console.log("you sever started on http://localhost:8080");
    });
  });
