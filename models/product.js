const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    description: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 700,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    rating: {
      type: Number,
      default: 5,
      min: 1,
      max: 5,
    },
    colors: [String],
    sizes: [
      {
        type: String,
        uppercase: true,
      },
    ],
    thumbnail: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", productSchema);
