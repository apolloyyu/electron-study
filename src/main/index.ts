import { IS_DEV } from '@/config';
import { app, BrowserWindow, ipcMain, dialog } from 'electron';

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        // titleBarStyle: 'hidden', // 是否展示标题栏
        // titleBarOverlay: true, // 是否展示最小化 关闭等右上角 mac则需要额外配置
        webPreferences: {
            // preload: path.join(__dirname, 'preload.js')
            // https://github.com/electron/forge/issues/2567 
            // Starting from Electron v12.0.0, the default value of contextIsolation changed from false to true, which prevents use of require in the renderer even if nodeIntegration is enabled
            contextIsolation: false,
            nodeIntegration: true,
        }
    });

    if (IS_DEV) {
        win.loadURL('http://localhost:8288/output/render/index.html');
        // win.webContents.openDevTools();
    } else {
        win.loadFile('../render/index.html');
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
