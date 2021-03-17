"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const createError = require('http-errors');
const path = require("path");
// Import Routers
const index_1 = require("./routes/index");
const api_1 = require("./routes/api");
app.use(express.json());
app.set("views", path.join(__dirname, "../views"));
app.set('view engine', 'ejs');
app.use('/', index_1.default);
app.use('/api', api_1.default);
app.use(function (req, res, next) {
    next(createError(404));
});
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render(`error`);
});
exports.default = app;
