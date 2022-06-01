const mongoose = require('mongoose');

const contactsSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  phone: String,
  address: String,
});

module.exports = mongoose.model('Contacts', contactsSchema);
