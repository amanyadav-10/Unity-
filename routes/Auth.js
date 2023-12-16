// We have to write the routes here to get the API that will be working here
const express = require("express");
userRouter = express.Router();

const { register, login } = require("../controllers/Auth")

userRouter.post("/login", login);
userRouter.post("/register", register);

module.exports = userRouter;