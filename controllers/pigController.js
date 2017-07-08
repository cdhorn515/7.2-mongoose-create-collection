var Pig = require('../models/pig');

module.exports = {
  indexLanding: function (req, res) {
    Pig.find().then(function(results){
      res.render('pig/list', {model:results});
    });
  },
  indexList: function (req, res) {
      var pig = new Pig({name: req.body.name, howMany: req.body.howMany});
      pig.save().then(function(){
        console.log('saving new pig');
      }).catch(function(error){
        console.log('error ', error);
      });
      res.redirect('/');
  },
  landing: function (req, res) {
    Pig.findOne({_id: req.params.id}).then(function(result){
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
          }
     if (req.body.howMany) {
       result.howMany = req.body.howMany;
        }
     if (req.body.attributes) {
       result.attributes.push(req.body.attributes);
        }
      if(req.body.owner) {
        var ownerInfo = {ownerName: req.body.owner, location: req.body.location};
        result.owners.push(ownerInfo);
      }
         result.save().then(function(){
           console.log('that\'ll do pig');
         });
        res.redirect('/');
      });
    },
    deletePig: function(req, res) {
      Pig.deleteOne({_id: req.params.id}).then(function(){
        res.redirect('/');
      });
    }
  };
