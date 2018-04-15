//webpack.production.config.js
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const glob = require('glob');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // 文件拷贝

let config = {
    entry: {
        main: __dirname + "/src/js/main.js",
        adSearch: __dirname + "/src/js/adSearch.js",
        searchResult: __dirname + "/src/js/searchResult.js",
        login: __dirname + "/src/js/login.js",
        singlePaper: __dirname + "/src/js/singlePaper.js"
    },
    output: {
        path: path.join(__dirname, "/dist"), //打包后的文件存放的地方
        filename: "js/[name].[hash:6].js",//打包后输出文件的文件名
        chunkFilename: 'js/[id].chunk.js'//chunk生成的配置
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/
            },

            {
                test: /\.(jpg|jpeg|png|gif|ico|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            localIdentName: '[name].[hash].[ext]'
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            localIdentName: '[name].[hash:7].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('css!less')
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": 'jquery',
            Handlebars: 'handlebars',
            bootstrap: 'bootstrap',
            datetimepicker: 'bootstrap-datetimepicker',
            table: 'bootstrap-table'
        }),
        new CleanPlugin(['dist/*']),
        new ExtractTextPlugin("css/[name]-style.css"),
        /*new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: 1
        }),*/
        //new webpack.optimize.UglifyJsPlugin(),
        new CopyWebpackPlugin([
            {from: './src/images', to: './images'} //拷贝图片
        ])
    ],
    externals: {
        $: 'jQuery'
    },
    node:{
        fs: 'empty'
    }
};
module.exports = config;
let pages = Object.keys(getEntry('./src/*.html'));
let confTitle = [
    {name: 'main', title: '这是首页'},
    {name: 'adSearch', title: '这是检索页'},
    {name: 'searchResult', title: '这是检索结果页'},
    {name: 'login', title: '这是登陆页'},
    {name: 'singlePaper', title: '这是文章页'}
];
//生成HTML模板
pages.forEach(function(pathname) {
    let itemName  = pathname.split('src\\'); //根据系统路径来取文件名,window下的做法//,其它系统另测
    let conf = {
        filename: itemName[1] + '.html', //生成的html存放路径,相对于path
        template: pathname + '.html', //html模板路径
        inject: true, //允许插件修改哪些内容,包括head与body
        hash: false, //是否添加hash值
        minify: { //压缩HTML文件
            removeComments: true,//移除HTML中的注释
            collapseWhitespace: false //删除空白符与换行符
        }
    };
    //conf.chunks = ['common', itemName[1]];
    for (let i in confTitle) {
        if (confTitle[i].name === itemName[1]) {
            conf.title = confTitle[i].title
        }
    }
    config.plugins.push(new HtmlWebpackPlugin(conf));
});
//按文件名来获取入口文件(即需要生成的模板文件数量)
function getEntry(globPath) {
    let files = glob.sync(globPath);
    let entries = {},
        entry, dirname, basename, pathname, extname;
    for (let i = 0; i < files.length; i++) {
        entry = files[i];
        dirname = path.dirname(entry);
        extname = path.extname(entry);
        basename = path.basename(entry, extname);
        pathname = path.join(dirname, basename);
        entries[pathname] = './' + entry;
    }
    return entries;
}