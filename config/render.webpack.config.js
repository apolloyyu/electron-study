const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { IS_DEV, defines } = require('./define.config');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    target: 'electron-renderer',
    mode: IS_DEV ? 'development' : 'production',
    entry: {
        index: './src/render/index.ts',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../output/render'),
        publicPath: './',
        clean: true,
    },
    node: {
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
        static: path.resolve(__dirname, '../output/render'),
    },
    devtool: IS_DEV ? 'inline-source-map' : 'source-map',
    optimization: {
        runtimeChunk: false,
        splitChunks: {
            chunks (chunk) {
                return chunk.name !== 'light-theme' && chunk.name !== 'dark-theme';
            },
            automaticNameDelimiter: '.',
            cacheGroups: {
                react: {
                    test: /[\\/]node_modules[\\/](react|react-dom|antd|styled-components)[\\/]/,
                    priority: 10
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
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
        new ESLintPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx'],
        }),
    ],
};