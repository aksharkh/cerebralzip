require("dotenv").config(); 

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); 

const mongoURI = process.env.MONGO_URI + "/dashboard"; 
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB - dashboard database"))
.catch((err) => console.error("MongoDB connection error:", err));





const bardatasetSchema = new mongoose.Schema({
  Month: String,
  Last_year: Number,
  This_year: Number,
});

const reviewtableSchema = new mongoose.Schema({
  Product: String,
  sold_amount: Number,
  unit_price: Number,
  revenue: Number,
  rating: Number,
});




const Bardataset = mongoose.model("bardataset", bardatasetSchema, "bardataset");
const ReviewTable = mongoose.model("reviewtable", reviewtableSchema, "reviewtable");



app.get("/api/bardataset", async (req, res) => {
  try {
    const data = await Bardataset.find({});
    

    res.json(
      data.map(item => ({
        month: item.Month,
        lastYear: item.Last_year,
        thisYear: item.This_year,
      }))
    );
  } catch (err) {
    console.error("Error fetching bardataset:", err);
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/reviewtable", async (req, res) => {
  try {
    const data = await ReviewTable.find({});

    res.json(
      data.map(item => ({
        product: item.Product,
        soldAmount: item.sold_amount,
        unitPrice: item.unit_price,
        revenue: item.revenue,
        rating: item.rating,
      }))
    );
  } catch (err) {
    console.error("Error fetching reviewtable:", err);
    res.status(500).json({ error: err.message });
  }
});





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
