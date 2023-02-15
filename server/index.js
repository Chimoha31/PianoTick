const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');
require("dotenv").config();
const PORT = 5000;
const user = require("./routes/user");

// app.get("/", (req, res) => {
//   res.send("Hello server");
// });

app.use(bodyParser.json());
app.use(cors());

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Successfully connected to mongoDB 🎉");
  })
  .catch((err) => {
    console.log(err);
  });

// api
app.use("/pianotick", user);

app.listen(PORT, () => {
  console.log("Server is running on PORT " + PORT + "🌍");
});
