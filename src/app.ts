import * as express from "express";

const app = express()
const createError = require('http-errors');

const path = require("path");

// Import Routers
import indexRouter from './routes/index'
import apiRouter from "./routes/api"

app.use(express.json());
app.set("views", path.join(__dirname, "../views"));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/api', apiRouter);

  app.use(function(req, res, next) {
    next(createError(404));
  });
  

  app.use(function(err, req, res, next) {
   
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    res.status(err.status || 500);
    res.render(`error`);
  });

export default app;