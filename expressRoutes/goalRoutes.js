var express = require('express');
var app = express();
var goalRoutes = express.Router();

// Require Item model in our routes module
var Goal = require('../models/goal');

// Defined store route
goalRoutes.route('/add').post(function (req, res) {
  var goal = new Goal(req.body);
  goal.save()
    .then(item => {
    res.status(200).json({'goal': 'goal added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
goalRoutes.route('/').get(function (req, res) {
    Goal.find(function (err, goals){
    if(err){
      console.log(err);
    }
    else {
      res.json(goals);
    }
  });
});

// Defined edit route
goalRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Goal.findById(id, function (err, goal){
      res.json(goal);
  });
});

//  Defined update route
goalRoutes.route('/update/:id').post(function (req, res) {
    Goal.findById(req.params.id, function(err, goal) {
    if (!goal)
      return next(new Error('Could not load Document'));
    else {
      cgoal.name = req.body.name;
      goal.price = req.body.price;

      goal.save().then(goal => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
goalRoutes.route('/delete/:id').get(function (req, res) {
    Goal.findByIdAndRemove({_id: req.params.id}, function(err, goal){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = goalRoutes;