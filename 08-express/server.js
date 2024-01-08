var express = require('express')
var app = express()

app.get('/',function(req,res){
    res.send('Esta seria a index do site')
})
app.get('/fale',function(req,res){
    res.send('Esta é a pagina para contato!!!')
})
app.get('/missao',function(req,res){
    res.send('Esta é a pagina que conta a missão da empresa!!!')
})

var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('O servidor pode ser acessado emm http://%s:%s',host,port)
})