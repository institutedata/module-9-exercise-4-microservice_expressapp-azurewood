'use strict';

const url = require('url');
let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get('/', (req, res) => {
    const queryObject = url.parse(req.url, true).query;

    if (queryObject.id)
        Controllers.reviewController.getReview(req, res, queryObject.id)
    else
        Controllers.reviewController.getReviews(res);
})

router.get('/:id', (req, res) => {
    Controllers.reviewController.getReview(req, res)
})

router.post('/create', (req, res) => {
    Controllers.reviewController.createReview(req.body, res)
})

router.put('/:id', (req, res) => {
    Controllers.reviewController.updateReview(req, res)
})

router.delete('/:id', (req, res) => {
    const queryObject = url.parse(req.url, true).query;

    Controllers.reviewController.deleteReview(req, res, queryObject.id)
})

module.exports = router;