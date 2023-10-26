const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.loadFile('./config/index.html');
};

app.whenReady().then(() => {
    ipcMain.handle('ping', () => 'pong');
    ipcMain.on('set-title', (event, title) => {
        const webContents = event.sender;
        const win = BrowserWindow.fromWebContents(webContents);
        win.setTitle(title);
    });
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {app.quit();}
});