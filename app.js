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
app.post('/pig/list', pigController.indexList);

app.get('/pig/editpig/:id', pigController.landing);
app.post('/pig/editpig/:id', pigController.edit);

app.post('/pig/deletepig/:id', pigController.deletePig);

// added information to database
//
// var pig = new Pig({name: 'watering can', howMany: 1, owners: [{ownerName: 'Christina', location: "SC"}, {ownerName: 'Peter', location: "WA"}], attributes: ['metal', 'shiny']});
//
// pig.save();
//
// var pig = new Pig({name: 'car mascot', attributes: ['squishy', 'soft']});
//
// pig.save();


app.listen(3000, function(){
  console.log('app started');
});
