const mongoose = require('mongoose');
require('../db');

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      index: { unique: true }
    },
    oauth_provider: String,
    inviteToken: String,
    score: Number
  },
  { collection: 'users' }
);

module.exports = mongoose.model('User', UserSchema);
