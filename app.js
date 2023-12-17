const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());



const connectDB = require("./config/db");
connectDB();
const userRouter = require("./routes/Auth");
const buyerRouter = require("./routes/buyer");
const sellerRouter = require("./routes/seller")

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.use("/api/auth", userRouter);
app.use("/api/buyer", buyerRouter);
app.use("/api/seller", sellerRouter);

app.listen(5000, () => {
    console.log("Server is Up and Running");
});