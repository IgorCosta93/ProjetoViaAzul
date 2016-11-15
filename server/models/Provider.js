var mongoose = require('mongoose');

var ProviderSchema = new mongoose.Schema({
  cnpj: Number,
  razaoSocial: String,
  nomeFantasia: String,
  telefone: String,
  endereco: String,
});

ProviderSchema.pre('save', function(next, done) {
  next();
});

mongoose.model('Provider', ProviderSchema);
