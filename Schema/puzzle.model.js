const mongoose = require("mongoose");

const puzzleSchema = new mongoose.Schema({
  category: { type: String, required: true },
  difficulty: { type: String, required: true },
  question: { type: String, required: true },
  correct_answer: { type: String, required: true },
  incorrect_answers: { type: [String], required: true },
});

const puzzleModel = mongoose.model("Puzzle", puzzleSchema);
module.exports = puzzleModel;







