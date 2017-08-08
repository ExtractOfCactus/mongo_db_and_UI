var express = require('express');
var parser = require('body-parser');
var app = express();
var path = require("path");
var MongoClient = require("mongodb").MongoClient
var db;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static('client/build'));

app.get('/reviews', function(req, res) {
  db.collection('reviews').find().toArray(function(err, result) {
    if (err) {
      console.log(err);
      return;
    }
    res.json(result);
  });
});

app.post('/reviews', function(req, res) {
  db.collection('reviews').save(req.body, function(err, result){
    if (err) {
      console.log(err);
      return;
    }
    res.redirect('/');
  });
});

app.post('/delete', function(req, res) {
  db.collection('reviews').remove({}, function(err, result) {
    if (err) {
      console.log(err);
      return;
    }
    res.redirect("/");
  })
})

MongoClient.connect('mongodb://localhost:27017/fringe_reviews', function(err, database) {
  if (err) {
    console.log(err);
    return;
  }

  db = database;
  console.log("Connected to ye olde database...")

  app.listen(3000, function(){
    console.log("Listening on port 3000");
  });
});


app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/build/index.html');

});
