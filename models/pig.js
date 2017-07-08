var mongoose = require('mongoose');

var pigSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  howMany: {
    type: Number,
    default: 1},
  attributes: [String],
  owners: [{
    ownerName: String,
    location: String
  }]
});
//collection name in mongodb is Pig
var Pig = mongoose.model('Pig', pigSchema);

module.exports = Pig;
