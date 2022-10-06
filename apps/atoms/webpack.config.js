const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry:path.resolve(__dirname,'./src/index.ts'),
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js',
        library:'@surikmr1/atoms',
        libraryTarget:"umd",
        globalObject:'this',
        clean:true
    },
    devtool:'source-map',
    module:{
        rules:[
            {
                test:/\.css?$/i,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test:/\.(ts|js)x?$/i,
                exclude:/node_modules/,
                use:'babel-loader'
            },
            {
                test:/\.(png|jpg)$/i,
                type:'asset/resource'
            },
            {
                test:/\.(svg|gif)$/i,
                type:'asset/inline'
            }
            // {
            //     test:/\.(ts|tsx)?$/i,
            //     exclude:/node_modules/,
            //     use:'ts-loader'
            // }
        ]
    },
    resolve:{
        extensions:['.ts','.js','.jsx','.tsx','.json'],
        modules:['node_modules']
    },
    plugins:[new MiniCssExtractPlugin({
        filename:'style.css'
    })]
}