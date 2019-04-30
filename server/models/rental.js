const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
  title: {
    type: String,
    required: true,
    max: [128, "Toolong, max is 128 chracters"]
  },
  city: {
    type: String,
    required: true,
    lowercase: true
  },
  street: {
    type: String,
    required: true,
    min: [4, "Too Short, min is 4 characters"]
  },
  category: {
    type: String,
    required: true,
    lowercase: true
  },
  image: String,
  bedrooms: Number,
  shared: Boolean,
  description: {
    type: String,
    required: true
  },
  dailyRate: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Rental", rentalSchema);
