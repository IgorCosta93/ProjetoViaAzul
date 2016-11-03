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

router.get('/contactlist/:id', function(req, res){
  Contact.find({_id: req.params.id}, function(err, docs){
    res.json(docs);
  });
});


router.post('/contactlist', function(req, res){
  // console.log(req.body);
  var contact = new Contact(req.body);

  console.log(contact);
  Contact.update({_id: req.body._id}, req.body, {upsert: true,  setDefaultsOnInsert: true}, function(err, doc) {
    // if (err) return err;
    res.send(doc);
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

router.put('/contactlist/:id', function (req, res){
  var id = req.params.id;
//  Contact.find(({_id: id}).update({name: req.body.name, number: req.body.number}), function (err, doc){
  //  console.log('funfou');
    //res.json(doc);
//  });


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
