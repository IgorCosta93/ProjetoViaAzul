var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: Number,
});

mongoose.model('Contact', ContactSchema);
