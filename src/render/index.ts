const setButton = document.getElementById('btn-title')!;
const titleInput = document.getElementById('title')!;
setButton.addEventListener('click', () => {
    const title = (titleInput as any).value;
    (window as any).electronAPI.setTitle(title);
});

const fileBtn = document.getElementById('btn-file')!;
const filePathElement = document.getElementById('filePath')!;

fileBtn.addEventListener('click', async () => {
    const filePath = await (window as any).electronAPI.openFile();
    filePathElement.innerText = filePath;
});

console.log('士大夫胜多负少');
console.log(process.env.NODE_ENV);