var Pig = require('../models/pig');

module.exports = {
  list: function (req, res) {
    console.log('hi');
    Pig.find().then(function(results){
      res.render('pig/list', {model:results});
    });

  }
};
