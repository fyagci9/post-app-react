const Product = require("../models/Product.js");
const express = require("express");
const router = express.Router();

// Tüm kategorileri listeleme işlemi

router.get("/get-all", async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Yeni kategori ekleme işlemi

router.post("/add-product", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(200).json("Item added successfully");
  } catch (error) {
    res.status(400).json(error);
  }
});

// Kategori Güncelleme İşlemi

router.put("/update-product", async (req, res) => {
  try {
    await Product.findOneAndUpdate({ _id: req.body.productId }, req.body);
    res.status(200).json("item updated succesfuly");
  } catch (error) {
    res.status(400).json(error);
  }
});

// Kategori Silme İşlemi

router.delete("/delete-product", async (req, res) => {
  try {
    await Product.findOneAndDelete({ _id: req.body.productId });
    res.status(200).json("item deleted succesfuly");
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
