const os = require("os")
const ms = require('ms');

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

 export const totalRam: string = `${total_mem_in_gb + " GB "}`
 export const platform: string = process.platform
 export const CPU_model: string = core.model
 export const CPU_speed: string = `${core.speed}Mhz`
 export const CUP_cores: string = os.cpus().length
 export const sysUptime: string = `${ms(os.uptime() * 1000, { long: true })}`