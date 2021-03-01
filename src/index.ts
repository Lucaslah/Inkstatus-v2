import { port, run_with_color, appName } from "./config";
import * as express from "express";

const chalk_init = require('./functions/chalk')
const sections = require('./functions/command_line_usage')

const commandLineUsage = require('command-line-usage')

const app = express()

const path = require("path");

const logger = require('morgan');
const createError = require('http-errors');

// Import Routers
const indexRouter = require('./routes/index')

const CLI_name = appName.toLowerCase()

// Yargs
const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')

const appport = process.env.PORT || port || 8080

app.use(express.json());
app.set("views", path.join(__dirname, "../views"));
app.set('view engine', 'ejs');

app.use('/', indexRouter);


const usageargs = process.argv.slice(2)
if (!usageargs[0]) console.log(commandLineUsage(sections))


yargs(hideBin(process.argv))
.scriptName(CLI_name)

  .command('serve [port]', 'starts the server', (yargs) => {
    yargs
      .positional('port', {
        describe: 'port to bind on',
        alias: 'p',
        default: appport
      })
  }, (argv) => {

    if (argv.no_color) {

      app.listen(argv.port, () => {
        console.log(`${appName} is Running at: http://localhost:${argv.port}`);
    });
      
    } else {
    const CLI_color = process.env.run_with_color || run_with_color

    if (CLI_color === "true") {

        app.listen(argv.port, () => {
    
            chalk_init(argv)
            
            });
    
    } else {
        app.listen(argv.port, () => {
            console.log(`${appName} is Running at: http://localhost:${argv.port}`);
        });
      }
}

    if (argv.debug) console.info(`Running ${appName} in Debeg Mode`) + app.use(logger('dev'));


  })
  .option('debug', {
    alias: 'd',
    type: 'boolean',
    description: 'Run in debug mode'
  }).option('no_color', {
    alias: 'n',
    type: 'boolean',
    description: 'Removes Color from the CLI'
  })

  .argv

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
  res.render(`error`);
});
