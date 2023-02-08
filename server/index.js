const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();
const PORT = 5000;

app.get("/", (eq, res) => {
  res.send("Hello server");
});

app.listen(PORT, () => {
  console.log("Server is running on PORT " + PORT + "🌍");
});
