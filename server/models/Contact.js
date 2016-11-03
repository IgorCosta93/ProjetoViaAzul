var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: Number,
});

ContactSchema.pre('save', function(next, done) {
  next();
});

mongoose.model('Contact', ContactSchema);
