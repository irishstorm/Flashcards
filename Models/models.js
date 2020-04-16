const mongoose = require("mongoose");

//  Schema
const Schema = mongoose.Schema;
const FlashcardSchema = new Schema({
  question: String,
  translation: String,
  hint: String,
});

//   Model
const FlashcardModel = mongoose.model("Flashcard", FlashcardSchema);

module.exports = FlashcardModel;
