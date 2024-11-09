// models/Member.js
const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // You can add validation here
});

const Member = mongoose.model('Member', memberSchema); // Model creation

module.exports = Member; // Export the model
