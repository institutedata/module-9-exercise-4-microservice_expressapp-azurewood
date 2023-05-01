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

const updateDish = (req, res) => {
    //updates the post matching the ID from the param using JSON data POSTed in request body
    console.log(req.body)
    Models.Dish.findByIdAndUpdate(req.params.id, req.body, {
        useFindAndModify: false
    })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const deleteDish = (req, res, id) => {
    //deletes the post matching the ID from the param
    Models.Dish.findByIdAndRemove(id ? id : req.params.id, req.body, {
        useFindAndModify: false
    })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

module.exports = {
    build_data, getDishes, updateDish, deleteDish
}