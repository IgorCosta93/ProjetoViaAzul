var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');

//Requisita o mongojs
var mongojs = require('mongojs');
//Especifica o banco que sera usado e em seguida a collection
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

require('./server/models/Contact');
var routes = require('./server/routes/index');

mongoose.connect('mongodb://localhost/database_va');

//Responsavel por chamar o arquivo Index.html e direcionar a localização
//Procura por arquivos estaticos
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

// error handlers

// development error handler
// will print stacktrace
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
