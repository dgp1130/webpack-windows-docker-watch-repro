const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    watch: true,
    watchOptions: {
        // Uncomment to fix.
        // poll: 500,
    },
    devServer: {
        static: './dist',
    },
};
