const mongoose = require("mongoose");
// const Schmea = mongoose.Schema

const Movie = new mongoose.Schema(
  {
    name: { type: String, required: true },
    time: { type: [String], required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("movies", Movie);
