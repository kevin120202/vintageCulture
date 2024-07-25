import express from "express"
import dotenv from 'dotenv';
dotenv.config()
import cors from 'cors';

// Files
import products from "./data/products.js"
import connectDB from "./config/db.js";

const app = express()

app.use(cors());

// Routes
app.get("/", (req, res) => {
    res.send("API is running...")
})

app.get("/api/products", (req, res) => {
    res.json(products)
})

app.get("/api/products/:id", (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

const port = process.env.PORT || 8000
connectDB()
app.listen(port, () => console.log(`Server running on port ${port}`))