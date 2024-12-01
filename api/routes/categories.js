const Category = require("../models/Category.js");
const express = require("express");
const router = express.Router();

// Tüm kategorileri listeleme işlemi

router.get("/get-all", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Yeni kategori ekleme işlemi

router.post("/add-category", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(200).json("Item added successfully");
  } catch (error) {
    res.status(400).json(error);
  }
});

// Kategori Güncelleme İşlemi

router.put("/update-category", async (req, res) => {
  try {
    await Category.findOneAndUpdate({ _id: req.body.categoryId }, req.body);
    res.status(200).json("item updated succesfuly");
  } catch (error) {
    res.status(400).json(error);
  }
});

// Kategori Silme İşlemi

router.delete("/delete-category", async (req, res) => {
  try {
    await Category.findOneAndDelete({ _id: req.body.categoryId });
    res.status(200).json("item deleted succesfuly");
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
