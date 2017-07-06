var mongoose = require('mongoose');
var Pig = require('./models/pig');

mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost:27017/cdccollection');

var pig = new Pig({name: 'watering can', size: 'large', color: 'copper', owners: [{name: 'Christina', howLongOwned: 6}, {name: 'Peter', howLongOwned: 2}], attributes: ['metal', 'shiny'], howMany: 1});


pig.save();

console.log(pig.toObject());
