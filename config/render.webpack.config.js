/* eslint-disable @typescript-eslint/naming-convention */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { IS_DEV, PORT, defines } = require('./define.config');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    target: 'electron-renderer', // webpack 能够为多种环境或 target 构建编译 https://www.webpackjs.com/configuration/target/
    mode: IS_DEV ? 'development' : 'production',
    entry: {
        index: './src/render/index.ts',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../output/render'),
        publicPath: IS_DEV ? '/output/render' : './', // develop环境下使用devServer，所以需要修改publicPath
        clean: true,
    },
    node: {
        global: true,
        __dirname: true,
        __filename: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        hot: false,
        port: PORT
    },
    devtool: IS_DEV ? 'inline-source-map' : 'source-map',
    // optimization: {
    //     runtimeChunk: false,
    //     splitChunks: {
    //         chunks (chunk) {
    //             return chunk.name !== 'light-theme' && chunk.name !== 'dark-theme';
    //         },
    //         automaticNameDelimiter: '.',
    //         cacheGroups: {
    //             react: {
    //                 test: /[\\/]node_modules[\\/](react|react-dom|antd|styled-components)[\\/]/,
    //                 priority: 10
    //             },
    //             vendors: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 priority: -10
    //             },
    //             default: {
    //                 minChunks: 2,
    //                 priority: -20,
    //                 reuseExistingChunk: true
    //             }
    //         }
    //     }
    // },
    plugins: [
        new HtmlWebpackPlugin({
            // title: 'Development',
            // templateContent: '<div id="root"></div>',
            inject: true,
            template: path.join(__dirname, '../src/render/index.html'),
            chunks: 'index',
            minify: true,
            filename: 'index.html'
        }),
        new webpack.DefinePlugin({
            ...Object.keys(defines).reduce((map, key) => ({ ...map, [key]: JSON.stringify(defines[key]) }), defines),
        }),
        new ESLintPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx'],
        }),
        new webpack.ProvidePlugin({
            global: 'window',
        })
    ],
};