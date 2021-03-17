"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const stats = require("../stats");
const router = express.Router();
/* Home Page */
router.get('/', (req, res) => {
    res.send('Hello World');
});
/* Total Ram */
router.get('/totalRam', (req, res) => {
    res.json({ totamRam: stats.totalRam });
});
/* Platform */
router.get('/platform', (req, res) => {
    res.json({ platform: stats.platform });
});
/* CPU Model */
router.get('/CPU_model', (req, res) => {
    res.json({ CPU_model: stats.CPU_model });
});
/* CPU Speed */
router.get('/CPU_speed', (req, res) => {
    res.json({ CPU_speed: stats.CPU_speed });
});
/* CPU Cores */
router.get('/CPU_cores', (req, res) => {
    res.json({ CPU_cores: stats.CPU_cores });
});
/* System Uptime */
router.get('/sysUptime', (req, res) => {
    res.json({ sysUptime: stats.sysUptime });
});
exports.default = router;
