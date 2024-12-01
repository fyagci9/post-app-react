const Bill = require("../models/Bill.js");
const express = require("express");
const router = express.Router();

// Tüm kategorileri listeleme işlemi

router.get("/get-all", async (req, res) => {
  try {
    const Bill = await Bill.find();
    res.status(200).json(Bill);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Yeni kategori ekleme işlemi

router.post("/add-bill", async (req, res) => {
  try {
    const newBill = new Bill(req.body);
    await newBill.save();
    res.status(200).json("Item added successfully");
  } catch (error) {
    res.status(400).json(error);
  }
});

// Kategori Güncelleme İşlemi

router.put("/update-bill", async (req, res) => {
  try {
    await Bill.findOneAndUpdate({ _id: req.body.billId }, req.body);
    res.status(200).json("item updated succesfuly");
  } catch (error) {
    res.status(400).json(error);
  }
});

// Kategori Silme İşlemi

router.delete("/delete-bill", async (req, res) => {
  try {
    await Bill.findOneAndDelete({ _id: req.body.billId });
    res.status(200).json("item deleted succesfuly");
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
