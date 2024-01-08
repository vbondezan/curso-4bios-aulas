var express = require('express')
var app = express()

app.get('/',function(request,response){
    response.sendFile(__dirname+"/src/index.html")
})
app.get('/prod',function(request,response){
    response.sendFile(__dirname+"/src/produtos.html")
})
app.get('/fale',function(request,response){
    response.sendFile(__dirname+"/src/contato.html")
})
var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('O servidor pode ser acessado emm http://%s:%s',host,port)
})