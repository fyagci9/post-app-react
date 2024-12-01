const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const cors = require("cors")
const app = express();
const port = 5000;

dotenv.config();

//routes

const categoryRoute = require("./routes/categories.js")
const productRoute = require("./routes/products.js")
const billRoute = require("./routes/bills.js")

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("veri tabanı bağlandı");
  } catch (error) {
    throw error;
  }
};

//middlewares

app.use(express.json())
app.use(cors())

app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/bills", billRoute);


app.listen(port, () => {
  connect();
  console.log(`Sunucu http://localhost:${port} unda çalışıyor`);
}); 
