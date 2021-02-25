"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const path = require("path");
const os = require("os");
const ms = require('ms');
const express = require('express');
const app = express();
const appport = process.env.PORT || config_1.port;
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    // Get MEM Info:
    var total_memory = os.totalmem();
    var total_mem_in_kb = total_memory / 1024;
    var total_mem_in_mb = total_mem_in_kb / 1024;
    var total_mem_in_gb = total_mem_in_mb / 1024;
    total_mem_in_kb = Math.floor(total_mem_in_kb);
    total_mem_in_mb = Math.floor(total_mem_in_mb);
    total_mem_in_gb = Math.floor(total_mem_in_gb);
    total_mem_in_mb = total_mem_in_mb % 1024;
    total_mem_in_kb = total_mem_in_kb % 1024;
    total_memory = total_memory % 1024;
    const core = os.cpus()[0];
    res.render(path.resolve(`views/index.ejs`), {
        totalRam: `${total_mem_in_gb + " GB "}`,
        platform: process.platform,
        CPU_model: core.model,
        CPU_speed: `${core.speed}Mhz`,
        CUP_cores: os.cpus().length,
        sysUptime: `${ms(os.uptime() * 1000, { long: true })}`
    });
});
app.listen(appport, () => {
    console.log(`InkStatus is Running at: http://localhost:${appport}`);
});
