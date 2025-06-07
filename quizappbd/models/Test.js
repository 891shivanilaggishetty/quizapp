const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  title: String,
  course: String,
  sections: [String], // Example: ["MCQ", "NAT"]
  duration: Number, // in minutes
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Test', testSchema);
