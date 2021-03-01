import { app, BrowserWindow } from "electron"

const createWindow = require("../functions/createWindow")
const ejse = require("../functions/ejs_conf")

ejse()

app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})