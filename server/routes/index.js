var express = require('express');
var app = express();
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var mongojs = require('mongojs');
var Contact = mongoose.model('Contact');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/home', function(req, res, next) {
  res.render('home');
});

router.get('/contactlist', function(req, res){

  Contact.find(function(err, docs){
    res.json(docs);
  });
});

router.post('/contactlist', function(req, res){
  // console.log(req.body);
  Contact.create(req.body, function(err, doc) {
    if (err) return next(err);
    res.send(doc);
  });
});
//
router.delete('/contactlist/:id', function (req, res){
  var id = req.params.id;
  Contact.find(req.body).remove(function (err, doc){
    if(err) console.log(err);
    res.json(doc);
  });
});

router.post('/contactlist/:id', function (req, res){
  var id = req.params.id;
  Contact.find(({_id: req.body}).update({name: req.body.name, number: req.body.number}), function (err, doc){
    console.log('funfou');
    res.json(doc);
  });


// router.put('/contactlist/:id', function (req, res){
//   var id = req.params.id;
//   Contact.update({query: {_id: mongojs.ObjectId(id)},
//     update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
//     new: true}, function (err, doc){
//       res.json(doc);
//   });
// });
});

module.exports = router;
