const path =require('path')
//开始时写错了，写成export，配置文件一直没成功
//path需要是绝对路径，使用path模块将前面ed路径拼接起来
module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'bundle.js',
        publicPath:'dist/'
        //publicPath,文件的路径
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                //css-loader只负责将css文件加载
                //style-loader负责将样式添加DOM中
                //使用多个loader时，是从右向左读
                use: [ 'style-loader', 'css-loader' ]

            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                //
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                        //当加载的图片小于limit时，会将图片编译为base64字符串形式
                     //当加载的图片大雨limit时，需要file-loader
                        limit: 8192,
                        //设定文件出生在img文件夹，出生名为本名，加哈希值，都需要用[]否则名字会固定,ext是扩展名
                        name:'img/[name].[hash:8].[ext]'
                    },
                    
                  }
                ]
              },
              {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['es2015']
                  }
                }
              }

        ]
    }
}