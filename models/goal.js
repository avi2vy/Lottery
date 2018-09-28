var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Goal = new Schema({
  goal: {
    type: String
  },
  price: {
    type: Number
  }
},{
    collection: 'goals'
});

module.exports = mongoose.model('goal', Goal);