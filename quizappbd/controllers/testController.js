const Test = require('../models/Test');
const Question = require('../models/Question');

exports.createTest = async (req, res) => {
  try {
    const { title, course, sections, duration } = req.body;
    const test = new Test({
      title,
      course,
      sections,
      duration,
      createdBy: req.userId // from JWT middleware
    });
    await test.save();
    res.status(201).json({ message: 'Test created', test });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create test' });
  }
};

exports.getAllTests = async (req, res) => {
  try {
    const tests = await Test.find().populate('questions');
    res.status(200).json(tests);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tests' });
  }
};
