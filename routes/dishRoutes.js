'use strict';

const url = require('url');
let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get('/build', (req, res) => {
    Controllers.dishController.build_data(req, res);
})

router.get('/', (req, res) => {
    Controllers.dishController.getDishes(res);
})

router.put('/:id', (req, res) => {
    Controllers.dishController.updateDish(req, res)
})

router.delete('/:id', (req, res) => {
    const queryObject = url.parse(req.url, true).query;

    Controllers.dishController.deleteDish(req, res, queryObject.id)
})

module.exports = router;