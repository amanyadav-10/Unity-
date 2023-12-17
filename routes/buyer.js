const express = require("express");
buyerRouter = express.Router();

const { list_of_sellers, seller_cata, orderList } = require("../controllers/buyer");

buyerRouter.get("/list_of_sellers", list_of_sellers);
buyerRouter.get("/seller-catalogue/:id", seller_cata);
buyerRouter.post("/create-order/:id", orderList);


module.exports = buyerRouter;