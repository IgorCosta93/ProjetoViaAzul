var express = require('express');
var app = express();
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var mongojs = require('mongojs');
var Contact = mongoose.model('Contact');
var Client = mongoose.model('Client');
var Provider = mongoose.model('Provider');

// CONTATOS

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/home', function(req, res, next) {
  res.render('home');
});

router.get('/client', function(req, res, next) {
  res.render('client');
});

router.get('/provider', function(req, res, next) {
  res.render('provider');
});


router.get('/contactlist', function(req, res){
  Contact.find(function(err, docs){
    res.json(docs);
  });
});

router.get('/contactlist/:id', function(req, res){
  Contact.find({_id: req.params.id}, function(err, docs){
    res.json(docs);
  });
});


router.post('/contactlist', function(req, res){
  if(req.body._id) {
    Contact.update({_id: req.body._id}, req.body, {upsert: true,  setDefaultsOnInsert: true}, function(err, doc) {
      // if (err) return err;
      return res.send(doc);
    });
  }

  Contact.create(req.body, function(err, doc) {
    return res.send(doc);
  });
});
//
router.delete('/contactlist/:id', function (req, res){
  var id = req.params.id;
  Contact.find({_id: id}).remove(function (err, doc){
    if(err) console.log(err);
    res.json(doc);
  });
});



// CLIENTE
router.get('/clientlist', function(req, res){
  Client.find(function(err, docs){
    res.json(docs);
  });
});

router.get('/clientlist/:id', function(req, res){
  Client.find({_id: req.params.id}, function(err, docs){
    res.json(docs);
  });
});


router.post('/clientlist', function(req, res){
  if(req.body._id) {
    Client.update({_id: req.body._id}, req.body, {upsert: true,  setDefaultsOnInsert: true}, function(err, doc) {
      // if (err) return err;
      return res.send(doc);
    });
  }

  Client.create(req.body, function(err, doc) {
    return res.send(doc);
  });
});
//
router.delete('/clientlist/:id', function (req, res){
  var id = req.params.id;
  Client.find({_id: id}).remove(function (err, doc){
    if(err) console.log(err);
    res.json(doc);
  });
});

//FORNECEDOR

router.get('/providerlist', function(req, res){
  Provider.find(function(err, docs){
    res.json(docs);
  });
});

router.get('/providerlist/:id', function(req, res){
  Provider.find({_id: req.params.id}, function(err, docs){
    res.json(docs);
  });
});


router.post('/providerlist', function(req, res){
  if(req.body._id) {
    Provider.update({_id: req.body._id}, req.body, {upsert: true,  setDefaultsOnInsert: true}, function(err, doc) {
      // if (err) return err;
      return res.send(doc);
    });
  }

  Provider.create(req.body, function(err, doc) {
    return res.send(doc);
  });
});
//
router.delete('/providerlist/:id', function (req, res){
  var id = req.params.id;
  Provider.find({_id: id}).remove(function (err, doc){
    if(err) console.log(err);
    res.json(doc);
  });
});




module.exports = router;
