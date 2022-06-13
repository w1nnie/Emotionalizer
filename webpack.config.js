const path = require('path')

module.exports = {
    mode:'production',
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: './',
        },
        port: 8080,
        open: true,
        watchFiles: ['src/**/*', 'dist/**/*', 'assets/**/*'],
        compress: true,
    }
};