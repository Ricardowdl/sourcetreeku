const path =require('path')
const webpack=require('webpack')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const VueLoaderPlugin=require('vue-loader/lib/plugin');
//开始时写错了，写成export，配置文件一直没成功
//path需要是绝对路径，使用path模块将前面ed路径拼接起来
module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'bundle.js',

    },
    module:{
        rules:[
          {test:/\.vue$/,
            use:['vue-loader']
            
          },
          {test:/\.css$/,
            use:['vue-style-loader','css-loader']
            
            
          }
        ]

        
    },
    plugins:[
      new VueLoaderPlugin(),
      new webpack.BannerPlugin('版权归wdl所有'),
      new HtmlWebpackPlugin({
        template:'index.html'
      } )
    ]
    ,
    resolve:{
      alias:{//别名
        'vue$':'vue/dist/vue.esm.js'
      }
    },
    devServer:{
      contentBase:'./dist',
      inline:true
    }
}