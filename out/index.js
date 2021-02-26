"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const express = require('express');
const app = express();
const path = require("path");
const stats = require('./stats');
const appport = process.env.PORT || config_1.port;
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
app.listen(appport, () => {
    console.log(`InkStatus is Running at: http://localhost:${appport}`);
});
