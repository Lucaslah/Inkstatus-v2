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

 const ramTotal = total_mem_in_gb
 const platform1 = os.type() || process.platform
 const modelCPU = core.model
 const speedCPU = core.speed // MHz
 const coresCPU = os.cpus().length
 const uptimesys = os.uptime() * 1000


 export const totalRam: number = ramTotal
 export const platform: string = platform1
 export const CPU_model: string = modelCPU
 export const CPU_speed: number = speedCPU
 export const CPU_cores: number = coresCPU
 export const sysUptime: number = uptimesys