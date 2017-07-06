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

var Pig = mongoose.model('Pig', pigSchema);

module.exports = Pig;
// storing nested obj as field in SO
