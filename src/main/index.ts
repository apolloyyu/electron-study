import { app, BrowserWindow, ipcMain, dialog } from 'electron';

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // preload: path.join(__dirname, 'preload.js')
        }
    });

    if (process.env.NODE_ENV === 'production') {
        win.loadFile('../render/index.html');
    } else {
        win.loadURL('http://localhost:8288/output/render/index.html');
    }
};

app.whenReady().then(() => {
    ipcMain.handle('ping', () => 'pong');
    ipcMain.on('set-title', (event, title) => {
        const webContents = event.sender;
        const win = BrowserWindow.fromWebContents(webContents);
        win?.setTitle(title);
    });
    ipcMain.handle('dialog:openFile', handleFileOpen);
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {app.quit();}
});

async function handleFileOpen () {
    const { canceled, filePaths } = await dialog.showOpenDialog({});
    if (!canceled) {
        return filePaths[0];
    } else {
        return null;
    }
}
console.log('test');
