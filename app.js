const express = require('express');
const path = require("path");
const logger = require('morgan');
require('dotenv').config();
/* eslint-disable no-unused-vars */
const db = require('./db/db');
/* eslint-enable no-unused-vars */

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const shopsRouter = require('./routes/shops');
const {isAuthenticated} = require('./controllers/user.controller');

const app = express();
app.use("/public", express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(isAuthenticated)

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shops', shopsRouter);

module.exports = app;
