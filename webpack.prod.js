const path = require ('path');

module.exports = 
{
    mode: 'production',
    entry: './src/app.js',
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
        path: path.resolve (__dirname, 'dist')
    }
}