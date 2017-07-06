var Pig = require('../models/pig');

module.exports = {
  indexLanding: function (req, res) {
    Pig.find().then(function(results){
      res.render('pig/list', {model:results});
    });
  },


  indexList: function (req, res) {
    console.log('hi');

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
  },
  landing: function (req, res) {
    console.log('firing');
    Pig.findOne({_id: req.params.id}).then(function(result){
      console.log('result', result);
      if (result){
        res.render('pig/editpig', {model:result});
      }
    });
  },

  edit: function (req, res) {
    Pig.findOne({_id: req.params.id}).then(function(result){
      console.log('finding pig');
      if (req.body.name) {
         result.name = req.body.name;
         result.save();

      }
        res.redirect('/');

      });
      // Recipe.findOne({name: 'Salad'}).then(function(result){
      //   //can save results in context obj and send to mustache file
      //   console.log(result);
      //   var ingredient = {name: 'bacon', amount: 4};
      //   result.ingredients.push(ingredient);
      //   result.save();
      // });
    }

  };
