"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    name: { type: String, trim: true, required: true },
    rating: { type: String, trim: true, required: true },
    comment: { type: String, trim: true, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("review", reviewSchema);