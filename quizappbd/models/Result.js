const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  test: { type: mongoose.Schema.Types.ObjectId, ref: 'Test' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  answers: [
    {
      question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
      selectedAnswer: mongoose.Schema.Types.Mixed
    }
  ],
  score: Number,
  percentage: Number,
  rank: Number,
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Result', resultSchema);
