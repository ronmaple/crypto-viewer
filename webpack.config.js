const path = require('path');

module.exports = (env) => {
    console.log('env', env);
    const isProduction = (env === 'production');

    return {
        entry: ['babel-polyfill', './src/index.js'],
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }]
        },
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true, // serve index.html always
            proxy: {
                '/api': 'http://localhost:8082'
            }
        }
    }
}


// loader 

