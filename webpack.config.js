const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        main_page: './src/main_page.js',
        menu: './src/menu.js',
        contacts: './src/contacts.js',
      },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Cyber Bar',
        }),
    ],
    devtool: 'inline-source-map',
    output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
};