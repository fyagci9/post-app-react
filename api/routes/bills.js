const Bill = require("../models/Bill.js");
const router = require("express").Router();


// Tüm Fatura listeleme işlemi

router.get("/get-all", async (req, res) => {
  try {
    const bill = await Bill.find();
    res.status(200).json(bill);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Yeni Fatura ekleme işlemi

router.post("/add-bill", async (req, res) => {
  try {
    const newBill = new Bill(req.body);
    await newBill.save();
    res.status(200).json("Item added successfully");
  } catch (error) {
    res.status(400).json(error);
  }
});

// Fatura Güncelleme İşlemi

router.put("/update-bill", async (req, res) => {
  try {
    await bill.findOneAndUpdate({ _id: req.body.billId }, req.body);
    res.status(200).json("item updated succesfuly");
  } catch (error) {
    res.status(400).json(error);
  }
});

// Fatura Silme İşlemi

router.delete("/delete-bill", async (req, res) => {
  try {
    await bill.findOneAndDelete({ _id: req.body.billId });
    res.status(200).json("item deleted succesfuly");
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
