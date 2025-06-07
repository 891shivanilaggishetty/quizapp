const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  test: { type: mongoose.Schema.Types.ObjectId, ref: 'Test' },
  type: { type: String, enum: ['MCQ', 'NAT'], required: true },
  section: String,
  questionText: String,
  options: [String], // Only for MCQ
  correctAnswer: mongoose.Schema.Types.Mixed, // can be string or number
  marks: Number
});

module.exports = mongoose.model('Question', questionSchema);
