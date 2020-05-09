const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  // description of exercise
  title: {
    type: String,
    required: true
  },
  // units (weight, distance, etc.) or exercise
  authors: {
    type: [String]
  },
  // how many or how long (5 miles, 20 reps, etc.)
  description: {
    type: String
  },
  image: {
    type: String
  },
  link: {
    type: String
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
