const User = require("../models/User.js");
const router = require("express").Router();

// Tüm kategorileri listeleme işlemi

router.get("/get-all", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Yeni kategori ekleme işlemi

router.get("/", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findById(userId);

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
