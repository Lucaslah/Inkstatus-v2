import { app, BrowserWindow } from "electron";
const path = require('path')

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

const ejse = require('ejs-electron')
// Data for Ejs
ejse.data('totalRam', `${total_mem_in_gb + " GB "}`)
ejse.data('platform', process.platform)
ejse.data('CPU_model', core.model)
ejse.data('CPU_speed', `${core.speed}Mhz`)
ejse.data('CUP_cores', os.cpus().length)
ejse.data('sysUptime', `${ms(os.uptime() * 1000, { long: true })}`)

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile(path.resolve(`views/index.ejs`))

}

app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})