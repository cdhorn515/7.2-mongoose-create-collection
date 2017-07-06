var Pig = require('../models/pig');

module.exports = {
  indexLanding: function (req, res) {
    Pig.find().then(function(results){
      res.render('pig/list', {model:results});
    });
  },


  indexList: function (req, res) {
    console.log('hi');

      Pig.create({name: req.body.name});
      var pig = new Pig({name: req.body.name, size: req.body.size, color: req.body.color, owners: [{ownerName: req.body.owner, howLongOwned: req.body.yearsOwned}, {ownerName: req.body.owner, howLongOwned: req.body.yearsOwned}], attributes: [req.body.attributes], howMany: req.body.howMany});
      pig.save().then(function(){
        console.log('saving new pig');
      }).catch(function(error){
        console.log('error ', error);
      });

      Pig.find().then(function(results){
        console.log('should add new pig');
      res.render('pig/list', {model:results});
    });
  }
};
