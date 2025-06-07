const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  collegeName: String,
  collegeId: String,
  profilePicture: String,
  collegeIdCard: String
});

module.exports = mongoose.model('User', userSchema);
