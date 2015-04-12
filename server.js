var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Todo = require('./models/todo');

var app = express();
var router = express.Router();
var port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/todo');

app.use(bodyParser.urlencoded({
  extended: true
}));

var todoRoute = router.route('/todo');

todoRoute.post(function(req, res) {
  var todo = new Todo();

  todo.title = req.body.title;
  todo.completed = req.body.completed;

  todo.save(function(err) {
    if(err)
      res.send(err)

    res.json({data:todo});
  });
});

app.use('/api', router);

app.listen(port);
console.log('Running on port ' + port);
