const http=require('http')


const server=http.createServer()

server.on('request',function(req,res){


    const url=req.url
    if(url === '/getscript'){
        //拼接一个合法的JS脚本。这里拼接的是一个方法的调用
        var scriptStr='show()'
        //res.end 发送给客户端，客户端把这个字符串 ，当做JS代码去解析执行
        res.end(scriptStr)
    }else{
        res.end('404')
    }
})

server.listen(3000,function(){
    console.log('server listen at http://127.0.0.1:3000')
})