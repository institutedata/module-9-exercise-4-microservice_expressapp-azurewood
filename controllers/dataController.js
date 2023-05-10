"use strict";

let Models = require("../models");

const get_data = async (res) => {
    const reviews= await Models.Review.find({})
    Models.Dish.find({})
        .then(dishes => {
            res.send({ result: 200, data: { dishes, reviews } })
        })
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}



module.exports = {
    get_data
}