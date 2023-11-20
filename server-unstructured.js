require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const asyncHandler = require('express-async-handler')

const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

console.log(MONGO_URL);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("API Runninggg......");
});

mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Node app is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

  const Product = require('./models/productModel')
  app.get('/api/products', asyncHandler(async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
}));