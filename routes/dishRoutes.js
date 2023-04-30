'use strict';

let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get('/build', (req, res) => {
    Controllers.dishController.build_data(req, res);
})

router.get('/', (req, res) => {
    Controllers.dishController.getDishes(res);
})

module.exports = router;