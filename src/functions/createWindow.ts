import { BrowserWindow } from "electron"
const path = require("path")

function createWindow () {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })
  
    mainWindow.loadFile(`../../src/views/index.ejs`)
  
  }

  module.exports = createWindow;