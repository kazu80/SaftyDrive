var webpack = require ('webpack');

module.exports = {
    module: {
        loaders: [
            {
                test   : /\.css$/,
                loaders: ['style', 'css']
            },
        ]
    },

    plugins: [
        new webpack.ProvidePlugin ({
            $              : "jquery",
            jQuery         : "jquery",
            'window.jQuery': 'jquery',
        })
    ],
}
