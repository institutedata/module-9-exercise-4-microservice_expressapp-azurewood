"use strict";

const axios = require('axios');
let Models = require("../models");

const build_data = async (req, res) => {

    try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');

        //console.log(response.data)
        response.data.categories.forEach(element => {
            console.log(element);
            
            new Models.Dish(element).save();
        });
        res.status(200)
        res.send({ result: 200, data: response.data });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}

const getDishes = (res) => {
    Models.Dish.find({})
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}


module.exports = {
    build_data, getDishes
}