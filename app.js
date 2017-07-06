var express = require('express');
var mustacheExpress = require('mustache-express');
var bodyParser = require('body-parser');
var qs = require('qs');
var path = require('path');
var mongoose = require('mongoose');
var pigController = require('./controllers/pigController');

var Pig = require('./models/pig');


var app = express();
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/static', express.static(path.join(__dirname, 'public')));

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/cdccollection');

app.get('/', pigController.indexLanding);
app.post('/', pigController.indexList);

// Pig.findOneAndUpdate({name: 'watering can'},[{ownerName: 'Christina', howLongOwned: 6}, {ownerName: 'Peter', howLongOwned: 2}]).then(function(error, result){
//   //can save results in context obj and send to mustache file
//   console.log(result);
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
