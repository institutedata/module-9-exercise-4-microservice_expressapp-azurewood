"use strict";

let Models = require("../models");

const getReviews = (res) => {
    Models.Review.find({})
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const getReview = (req, res, id) => {

    Models.Review.findById(id ? id : req.params.id, {
        useFindAndModify: false
    })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })

        })
}

const createReview = (data, res) => {
    console.log(data)
    new Models.Review(data).save()
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const updateReview = (req, res) => {
    //updates the post matching the ID from the param using JSON data POSTed in request body
    console.log(req.body)
    Models.Review.findByIdAndUpdate(req.params.id, req.body, {
        useFindAndModify: false
    })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const deleteReview = (req, res, id) => {
    //deletes the post matching the ID from the param
    Models.Review.findByIdAndRemove(id ? id : req.params.id, req.body, {
        useFindAndModify: false
    })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}


module.exports = {
    getReviews, getReview, createReview, updateReview, deleteReview
}
