const Question = require('../models/Question');

exports.addQuestion = async (req, res) => {
  try {
    const { testId, type, section, questionText, options, correctAnswer, marks } = req.body;
    const question = new Question({ test: testId, type, section, questionText, options, correctAnswer, marks });
    await question.save();
    res.status(201).json({ message: 'Question added', question });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add question' });
  }
};
