
var cors = require('cors')

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

var bodyParser = require('body-parser');

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var userRoutes = require('./routes/UserRoutes'); //importing route

userRoutes(app); //register the route

app.listen(port,function () {
    console.log('API server started on: ' + port);
  });
  