"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const stats = require("../stats");
const config_1 = require("../config");
const router = express.Router();
/* GET home page. */
router.get('/', (req, res) => {
    res.render(`index`, {
        totalRam: stats.totalRam,
        platform: stats.platform,
        CPU_model: stats.CPU_model,
        CPU_speed: stats.CPU_speed,
        CUP_cores: stats.CPU_cores,
        sysUptime: stats.sysUptime,
        // @ts-ignore
        appName: global.nametitle || config_1.appName
    });
});
exports.default = router;
