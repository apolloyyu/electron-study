/* eslint-disable @typescript-eslint/naming-convention */
const IS_DEV = process.env.NODE_ENV === 'development';
const PORT = 8288;
module.exports = {
    // ENTRYS,
    IS_DEV,
    PORT,
    defines: {
        'process.env.NODE_ENV': process.env.NODE_ENV || 'production',
        // 'process.env.APP_VERSION': APP_VERSION,
        // 'process.env.APP_ID': APP_ID,
        // 'process.env.APP_NAME': APP_NAME
    },
};
