var express = require('express');
var mustacheExpress = require('mustache-express');
var bodyParser = require('body-parser');
var qs = require('qs');
var mongoose = require('mongoose');
var pigController = require('./controllers/pigController');

var Pig = require('./models/pig');


var app = express();
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/cdccollection');

app.get('/', pigController.list);

// Pig.findOne({name: 'watering can'}).then(function(result){
//   //can save results in context obj and send to mustache file
//   console.log(result);
//   var owners = [{ownerName: 'Christina', howLongOwned: 6}, {ownerName: 'Peter', howLongOwned: 2}];
//   result.owners.push(owners);
//   result.save();
// });
app.listen(3000, function(){
  console.log('app started');
});

//added information to database
// var pig = new Pig({name: 'watering can', size: 'large', color: 'copper', owners: [{name: 'Christina', howLongOwned: 6}, {name: 'Peter', howLongOwned: 2}], attributes: ['metal', 'shiny'], howMany: 1});
//
//
// pig.save();
//
// console.log(pig.toObject());
