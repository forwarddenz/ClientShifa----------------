import {app, BrowserWindow,screen } from "electron"
import path from "path"
import { isDev } from "./util.js"
import { pollResources } from "./resourceManager.js"
import { getPreloadPath } from "./pathResolver.js"

app.on("ready", () => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize

    const mainWindow = new BrowserWindow({
    width: width,
    height: height,
    resizable: false,
    icon: "../ui/assets/logo.png",
    webPreferences: {
        nodeIntegration: false,
        preload: getPreloadPath(),
        contextIsolation: true
    }
    })

    mainWindow.maximize();

    if (isDev()) {
        mainWindow.loadURL("http://localhost:5123")
    } else {
        mainWindow.loadFile(path.join(app.getAppPath(), "./dist-react/index.html"))
    }

    pollResources(mainWindow)
}) 