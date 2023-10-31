const information = document.getElementById('info');
information.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`;

const func = async () => {
    const response = await window.versions.ping();
    console.log(response); // 打印 'pong'
};

func();

const setButton = document.getElementById('btn-title');
const titleInput = document.getElementById('title');
setButton.addEventListener('click', () => {
    const title = titleInput.value;
    window.electronAPI.setTitle(title);
});

const fileBtn = document.getElementById('btn-file');
const filePathElement = document.getElementById('filePath');

fileBtn.addEventListener('click', async () => {
    const filePath = await window.electronAPI.openFile();
    filePathElement.innerText = filePath;
});