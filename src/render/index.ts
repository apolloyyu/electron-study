const setButton = document.getElementById('btn-title')!;
const titleInput = document.getElementById('title')!;
setButton.addEventListener('click', () => {
    const title = (titleInput as any).value;
    (window as any).electronAPI.setTitle(title);
});

const fileBtn = document.getElementById('btn-file')!;
const filePathElement = document.getElementById('filePath')!;

let count = 0;
fileBtn.addEventListener('click', async () => {
    const filePath = await (window as any).electronAPI.openFile();
    filePathElement.innerText = 'filePath' + count;
    count++;
});
window.onload = () => {
    console.log('vcxvxcv');
};
// console.log(process.env.NODE_ENV);