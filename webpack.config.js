const path = require('path')

module.exports = {
    mode:'development',
    target: ['web', 'es5'],
    entry: {
        textalive: './src/textalive/index.js',
        Live2D: './src/Live2D/main.ts',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './dist/'
    },
    resolve: {
        extensions: ['.ts','.js'],
        alias: {
            '@framework': path.resolve(__dirname, './src/CubismSdk/Framework/src'),
            '@core': path.resolve(__dirname, './src/CubismSdk/Core'),
            '@images': path.resolve(__dirname, './images')
        }
    },
    cache: true,
    devServer: {
        static: {
            directory: path.join(__dirname, "/"),
        },
        port: 8080,
        open: true,
        watchFiles: ['src/**/*', 'dist/**/*'],
        compress: true,
        hot: true,
        devMiddleware: {
            writeToDisk: true,
        },
    },
    module: {
        rules: [
            {
                test: /\.txt/,
                type: 'asset/source',
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            }
        ]
    }
};