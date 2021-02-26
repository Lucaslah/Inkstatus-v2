var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const stats = require('../stats');
const ejse = require('ejs-electron');
function ejse_config() {
    return __awaiter(this, void 0, void 0, function* () {
        ejse.data('totalRam', stats.totalRam);
        ejse.data('platform', stats.platform);
        ejse.data('CPU_model', stats.CPU_model);
        ejse.data('CPU_speed', stats.CPU_speed);
        ejse.data('CUP_cores', stats.CUP_cores);
        ejse.data('sysUptime', stats.sysUptime);
    });
}
module.exports = ejse_config;
