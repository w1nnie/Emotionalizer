const path = require('path')

module.exports = {
    mode:'development',
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    cache: true,
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        port: 8080,
        open: true,
        watchFiles: ['src/**/*', 'dist/**/*'],
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.txt/,
                type: 'asset/source',
            }
        ]
    }
};