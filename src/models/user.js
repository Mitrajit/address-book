const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  token: { type: String },
});

module.exports = mongoose.model('Users', usersSchema);
