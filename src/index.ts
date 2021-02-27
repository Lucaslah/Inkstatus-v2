#!/usr/bin/env node

import { port, run_with_color } from "./config";

const chalk_init = require('./functions/chalk')
const sections = require('./functions/command_line_usage')

const commandLineUsage = require('command-line-usage')

const express = require('express')
const app = express()

const path = require("path");
const stats = require('./stats')

const logger = require('morgan');
const createError = require('http-errors');


// Yargs
const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')

const appport = process.env.PORT || port || 8080

app.set('views', path.join('../views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    res.render(path.resolve(`views/index.ejs`), {
        totalRam: stats.totalRam,
        platform: stats.platform,
        CPU_model: stats.CPU_model,
        CPU_speed: stats.CPU_speed,
        CUP_cores: stats.CUP_cores,
        sysUptime: stats.sysUptime

    });
});


const args = process.argv.slice(2)
if (!args[0]) console.log(commandLineUsage(sections))


yargs(hideBin(process.argv))
.scriptName("inkstatus")

  .command('serve [port]', 'starts the server', (yargs) => {
    yargs
      .positional('port', {
        describe: 'port to bind on',
        default: appport
      })
  }, (argv) => {

    if (argv.debug) console.info(`Running in Debeg Mode`) + app.use(logger('dev'));

        if (run_with_color === "true") {

            app.listen(argv.port, () => {
        
                chalk_init(argv)
                
                });
        
        } else {
            app.listen(argv.port, () => {
                console.log(`InkStatus is Running at: http://localhost:${argv.port}`);
            });
        }

  })
  .option('debug', {
    alias: 'd',
    type: 'boolean',
    description: 'Run in debug mode'
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
  res.render(path.resolve(`views/error.ejs`));
});

module.exports = stats;
module.exports = app;