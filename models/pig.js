var mongoose = require('mongoose');

var pigSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  size: String,
  attributes: [String],
  color: String,
  owners: [{
    ownerName: String,
    howLongOwned: Number
  }],
  howMany: {
    type: Number,
    required: true,
    default: 1}
});
//collection name in mongodb is Pig
var Pig = mongoose.model('Pig', pigSchema);

module.exports = Pig;
