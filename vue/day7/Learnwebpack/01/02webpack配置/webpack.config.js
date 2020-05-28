const path =require('path')
//开始时写错了，写成export，配置文件一直没成功
//path需要是绝对路径，使用path模块将前面ed路径拼接起来
module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'bundle.js'
    },
}