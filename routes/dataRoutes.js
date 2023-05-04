'use strict';

const url = require('url');
let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");


router.get('/', (req, res) => {
    Controllers.dataController.get_data(res);
})


module.exports = router;