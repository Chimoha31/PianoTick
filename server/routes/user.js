const User = require("../models/user");
const router = require("express").Router();
const jwt = require("jsonwebtoken");

// Register
router.post("/register", (req, res) => {});

// Login
router.post("/login", (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json(err);
  }
});
