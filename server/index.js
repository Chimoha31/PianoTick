const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const PORT = 5000;

app.get("/", (eq, res) => {
  res.send("Hello server");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Successfully connected to mongoDB 🎉")
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log("Server is running on PORT " + PORT + "🌍");
});
