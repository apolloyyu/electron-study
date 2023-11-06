import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';

export async function installExtensions () {
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
    const extensions = [REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS];
    return Promise.all(
        extensions.map(name =>
            installExtension(name, {
                loadExtensionOptions: {
                    allowFileAccess: true,
                },
            })
                .then((name: string) => console.log(`Added Extension:  ${name}`))
                .catch((err: Error) => console.log('An error occurred: ', err))
        )
    );
}