var express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  variablist = require('./routes/variablist');
 
var app = express();

//connect to mongodb qaylm is the database name
mongoose.connect('mongodb://localhost/qaylm',{useNewUrlParser: true });

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/variablist',variablist);

app.listen(4000);
console.log('server 4000 port is running in backend for MERN');
