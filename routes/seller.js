const express = require("express");
sellerRouter = express.Router();

const { create_catalogue, get_orders } = require("../controllers/seller");

sellerRouter.post("/create-catalogue/:id", create_catalogue);
sellerRouter.get("/orders/:id", get_orders);

module.exports = sellerRouter;