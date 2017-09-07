const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.dbUri);
// plug in the promise library:
mongoose.Promise = global.Promise;

mongoose.connection.on('error', err => {
  console.error(`Mongoose connection error: ${err}`);
  process.exit(1);
});
