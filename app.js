var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dbms:'
  + process.env.BASE_PW +
  '@dbms.kevmq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');


var usersRouter = require('./routes/users');

const adressRouter = require('./routes/adress')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

//CORS for FIAS
//edit it in future to FIAS
app.use((req, res, next)=>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', '*');
    return res.status(204).json({})
  }
  next();
})

app.use('/users', usersRouter);
app.use('/adress', adressRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    error: err
  });
});

module.exports = app;
