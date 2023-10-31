/* eslint-disable @typescript-eslint/naming-convention */
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { IS_DEV, defines } = require('./define.config');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    target: 'electron-main',

    mode: 'development',

    entry: {
        index: './src/main/index.ts'
    },

    output: {
        path: path.join(__dirname, '../output/main'),
        filename: 'index.js',
        devtoolModuleFilenameTemplate: '[absolute-resource-path]'
    },

    node: {
        __dirname: true,
        __filename: true
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        compilerOptions: {
                            importHelpers: false,
                        },
                    }
                },
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'json'],
        alias: {
            '@': path.join(__dirname, '../src'),
        },
    },
    devtool: IS_DEV ? 'inline-source-map' : 'source-map',
    
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.TARGET': JSON.stringify('electron-main'),
            ...Object.keys(defines).reduce((map, key) => ({ ...map, [key]: JSON.stringify(defines[key]) }), defines),
        }),
        new ESLintPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx'],
        }),
    ]
};