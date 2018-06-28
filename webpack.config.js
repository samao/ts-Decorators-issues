const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        ACP: path.join(__dirname, 'index.ts')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'window',
        umdNamedDefine: true,
        libraryExport: 'default'
    },
    devServer: {
        https: false,
        open: true,
        contentBase: path.resolve(__dirname, 'dist'),
        overlay: {
            warnings: true,
            errors: true
        },
        watchOptions: {
            ignored: /node_modules/
        },
        clientLogLevel: 'error',
        compress: true,
        port: 3000,
        inline: false
    },
    resolve: {
        extensions: ['.ts']
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join('index.html'),
            title: 'H5播放器',
            inject: 'head',
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true
                    }
                }
            }
        ]
    }
}