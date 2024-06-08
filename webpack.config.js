const path = require ('path');

module.exports = 
{
    mode: 'development',
    entry: './src/app.js',
    devtool: 'inline-source-map',
    devServer: {
        static : {
            directory: './'
        }
    },
    module: {
        rules: [
            {
                test: /.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve (__dirname, 'dist'),
        publicPath: '/dist'
    }
}