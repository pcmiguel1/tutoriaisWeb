var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var studentsRoutes = require('./routes/studentsRoutes.js');
var unitsRoutes = require('./routes/unitsRoutes.js');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/students', studentsRoutes);
app.use('/api/units', unitsRoutes);

module.exports = app;
