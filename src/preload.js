window.addEventListener('DOMContentLoaded', () => {
    console.log(process.versions);
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector);
        if (element) {element.innerText = text || '';}
    };
  
    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency]);
    }
});
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    // 除函数之外，我们也可以暴露变量
    ping: () => ipcRenderer.invoke('ping')
});
contextBridge.exposeInMainWorld('electronAPI', {
    setTitle: (title) => ipcRenderer.send('set-title', title),
    openFile: () => ipcRenderer.invoke('dialog:openFile')
});