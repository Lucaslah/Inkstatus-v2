import * as express from "express";
import * as stats from "../stats";
import { appName } from "../config";

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
        appName: appName

    });
});



module.exports = router;