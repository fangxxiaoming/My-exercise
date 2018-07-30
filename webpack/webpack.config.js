const path =require('path');
const htmlPlugin=require('html-webpack-plugin');
const  ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob=require('glob');
const PuifyCSSPlugin=require('purifycss-webpack');
module.exports={
    mode:"development",
    entry:{
        "index":'./src/index.js',
        "index2":'./src/index2.js'
    },
    output:{
        path:path.resolve(__dirname,"./dist"),
        filename:'[name].js',
        publicPath:'http;//localhost:8082/'
    },
    devServer:{
        contentBase:'./dist',
        host:'localhost',
        compress:true,
        port:'8082',
        open:true
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                  })
                 
            },
            {
                test:/\.(jpg|png|gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:'500',
                            outputPath:'images/'
                        }
                    }
                ]
            },
            {
                test:/\.(htm|html)$/i,
                loader:'html-withimg-loader'

            },{
                test:/\.(jsx|js)$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            "es2015","react"
                        ]
                    }
                },
                exclude:/node_modules/
            },
            {
                test:/\.scss/,
                use:ExtractTextPlugin.extract({
                   use: ['css-loader','sass-loader'],
                   fallback:'style-loader'
            })
        }
        ]
    },
    plugins:[
        new htmlPlugin({
            template:'./src/index.html',
            minify:{
                removeAttributeQuote:true
            },
            hash:true,
            filename:'a.html',
            title:'title',
            chunks:['index']
        }),
        //new ExtractTextPlugin("css/index.css")
        new ExtractTextPlugin("css/style.css"),
        new  PuifyCSSPlugin({
            paths:glob.sync(path.join(__dirname,'src/*.html'))
        }),
        new webpack.BannerPlugin('ming')
        
    ],
    node: {

        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
}