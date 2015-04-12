var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  title: String,
  completed: Boolean
});

module.exports = mongoose.model('Todo', TodoSchema);
