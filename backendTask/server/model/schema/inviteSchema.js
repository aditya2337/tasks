const mongoose = require('mongoose');
require('../db');

const InviteSchema = new mongoose.Schema(
  {
    email: String,
    token: String
  },
  { collection: 'invites' }
);

module.exports = mongoose.model('Invite', InviteSchema);
