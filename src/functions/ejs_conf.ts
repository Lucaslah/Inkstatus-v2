const stats = require('../stats')
const ejse = require('ejs-electron')

async function ejs_conf() {

ejse.data('totalRam', stats.totalRam)
ejse.data('platform', stats.platform)
ejse.data('CPU_model', stats.CPU_model)
ejse.data('CPU_speed', stats.CPU_speed)
ejse.data('CUP_cores', stats.CUP_cores)
ejse.data('sysUptime', stats.sysUptime)
ejse.data('appName', stats.appName)

}

module.exports = ejs_conf;