var express = require('express');
var app = express();

//Requisita o mongojs
var mongojs = require('mongojs');
//Especifica o banco que sera usado e em seguida a collection
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');

//Responsavel por chamar o arquivo Index.html e direcionar a localização
//Procura por arquivos estaticos
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactlist', function(req, res){
  console.log("I receive a Get request")

  db.contactlist.find(function(err, docs){
    console.log(docs);
    res.json(docs);
  });

  app.post('/contactlist', function(req, res){
    console.log(req.body);
    db.contactlist.insert(req.body, function(err, doc){
      res.json(doc);
    })
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

/*
app.listen(3000);
console.log("Server running on port 3000");
*/
app.listen(3000, function(){
  console.log('Servidor esta rodando!');
});
