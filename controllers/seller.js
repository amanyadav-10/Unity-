const Order = require("../Models/Order");
const Seller = require("../Models/Seller")
const User = require("../Models/userSchema")

const { v4: uuidv4 } = require('uuid');

// Function to generate a unique sell_id
const generateUniqueSellId = () => {
    return uuidv4(); // Using UUID version 4 for randomness
};

module.exports = generateUniqueSellId;



const create_catalogue = async (req, res) => {
    try {

        const new_cat = await User.findById(req.params.id);

        if (new_cat && new_cat.usertype === "seller") {
            const uniqueSellId = generateUniqueSellId(); // Replace with your unique ID generation logic
            const sell = new Seller({ sell_id: uniqueSellId, ...req.body });

            console.log("Working");
            await sell.save();
            res.status(200).send("Catalogue Updated");
        } else {
            console.log("Success - User is not a seller or not found");
            res.status(400).send("User is not a seller Or the user is not found");
        }
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
};

// Get API to get the list of the orders

const get_orders = async (req, res) => {
    try {
        const ord_id = req.params.id;
        if (!ord_id) {
            console.log("The seller does not have any order now");
            res.status(400).send("Seller not found");
        }
        else {
            const order_list = await Order.findOne({ "O_id": ord_id });
            console.log(order_list.order);
            const lisst = order_list.order;
            res.status(200).json({ message: "API working Fine", lisst });
        }
    }
    catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
}


module.exports = { create_catalogue, get_orders };


// We have written all the API now we have to push the data and retrieve it to test the APIs
