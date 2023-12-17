// const { ConnectionStates } = require("mongoose");
const Seller = require("../Models/Seller");
const User = require("../Models/userSchema");
const Order = require("../Models/Order");

// API for list of sellers
const list_of_sellers = async (req, res) => {

    try {
        const { email } = req.params;
        const sell_list = await Seller.find({});
        // console.log({ sell_list });
        // We have made the API to get the list of all the sellers that are there

        res.status(200).send(sell_list);
    }
    catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
}

const seller_cata = async (req, res) => {
    try {
        const doc_id = req.params.id;

        const sell = await Seller.findById(doc_id);
        if (sell) {
            console.log("Seller Found");
            res.status(200).json(sell.catalogue);
        }
        else {
            console.log("Seller not Found");
            res.status(404).send({ Error: "Not Found" });
        }
    }
    catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
}

const orderList = async (req, res) => {
    try {
        const sell_id = req.params.id;
        console.log(sell_id);
        const new_order = new Order(req.body);
        new_order.O_id = sell_id;
        console.log(new_order);
        await new_order.save();
        res.status(200).send("Success");
    }
    catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
}



module.exports = { list_of_sellers, seller_cata, orderList };
