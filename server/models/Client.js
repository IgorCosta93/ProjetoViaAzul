var mongoose = require('mongoose');

var ClientSchema = new mongoose.Schema({
  name: String,
  rg: Number,
  celular: String,
  endereco: String,
});

ClientSchema.pre('save', function(next, done) {
  next();
});

mongoose.model('Client', ClientSchema);
