const mongoose = require('mongoose');
require('../db');

const QuestionSchema = new mongoose.Schema(
  {
    number: Number,
    question: String,
    options: Object,
    answer: String
  },
  { collection: 'questions' }
);

module.exports = mongoose.model('Questions', QuestionSchema);
