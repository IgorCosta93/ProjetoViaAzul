var express = require('express');
var app = express();
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Contact = mongoose.model('Contact');

router.get('/', function(req, res, next) {
  console.log('entrooooou');
  res.render('index');
});

app.get('/contactlist', function(req, res){
  console.log("I receive a Get request");

  db.contactlist.find(function(err, docs){
    console.log(docs);
    res.json(docs);
  });

  app.post('/contactlist', function(req, res){
    console.log(req.body);
    db.contactlist.insert(req.body, function(err, doc){
      res.json(doc);
    });
  });

  app.delete('/contactlist/:id', function (req, res){
    var id = req.params.id;
    console.log(id);
    db.contactlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc){
      res.json(doc);
    });
  });

  app.get('/contactlist/:id', function (req, res){
    var id = req.params.id;
    console.log(id);
    db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc){
      res.json(doc);
    });
  });

  app.put('/contactlist/:id', function (req, res){
    var id = req.params.id;
    console.log(req.body.name);
    db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
      update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
      new: true}, function (err, doc){
        res.json(doc);
    });
  });
});

module.exports = router;
