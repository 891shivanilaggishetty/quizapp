const Result = require('../models/Result');

exports.submitResult = async (req, res) => {
  try {
    const { testId, answers, score, percentage, rank } = req.body;

    const result = new Result({
      test: testId,
      user: req.userId,
      answers,
      score,
      percentage,
      rank
    });

    await result.save();
    res.status(201).json({ message: 'Result submitted', result });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit result' });
  }
};

