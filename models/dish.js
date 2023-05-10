"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    idCategory: { type: String, trim: true, required: true, unique: true },
    strCategory: { type: String, trim: true, required: true },
    strCategoryThumb: { type: String, trim: true, required: true },
    strCategoryDescription: { type: String, trim: true, required: true },
    price: { type: String, trim: true, required: false },
    rating: { type: String, trim: true, required: false },
});

module.exports = mongoose.model("dish", dishSchema);