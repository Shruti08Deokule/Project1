const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// After writing dotenv, we have to call its config file
dotenv.config();

const userRouter=require("./routes/userRoute")
// Middleware to parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected successfully");
    app.listen(process.env.PORT || 3000, (err) => {
      if (err) console.log(err);
      console.log("Server running successfully at", process.env.PORT || 3000);
    });
  })
  .catch((error) => {
    console.log("Connection error:", error);
  });

app.use(userRouter)