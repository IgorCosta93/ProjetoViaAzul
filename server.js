var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');

var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

require('./server/models/Contact');
require('./server/models/Client');
require('./server/models/Provider');
var routes = require('./server/routes/index');

mongoose.connect('mongodb://localhost/database_va');

app.set('views', path.join(__dirname, 'src/templates'));
app.set('view engine', 'pug');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(__dirname + "/src"));
app.use(bodyParser.json());

app.use('/', routes);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.listen(3000, function(){
  console.log('Running on port 3000 😛 ...');
});

module.exports = app;
