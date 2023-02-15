const User = require("../models/user");
const router = require("express").Router();
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req, res) => {
  try {
    let userData = req.body;
    let user = await new User(userData);
    user.save((err, registeredUser) => {
      if (err) {
        console.log(err);
      } else {
        let payload = { subject: registeredUser._id };
        let token = jwt.sign(payload, "secretKey");
        return res.status(200).json({ token: token, user: registeredUser });
      }
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).send("There is no user");
    } else if (req.body.password !== user.password) {
      return res.status(401).send("Invalid user");
    } else {
      let payload = { subject: user._id };
      let token = jwt.sign(payload, "secretKey");
      return res.status(200).send({token: token, user: user});
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
