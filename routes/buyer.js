const express = require("express");
buyerRouter = express.Router();

const list_of_sellers = require("../controllers/buyer");

buyerRouter.get("list_of_sellers", list_of_sellers);


module.exports = buyerRouter;