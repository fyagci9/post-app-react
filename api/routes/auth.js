const Auth = require("../models/User.js");
const router = require("express").Router();
const bcrypt = require("bcryptjs");

//! register process

router.post("/add-user", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new Auth({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(200).json("A new user added succesfuly");
  } catch (error) {
    res.status(500).json(error);
  }
});

//! login process

router.post("/login", async (req, res) => {
  try {
    const user = await Auth.findOne({ email: req.body.email });
    !user && res.status(400).send({ error: "User not found" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      res.status(403).json("invalid password");
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
