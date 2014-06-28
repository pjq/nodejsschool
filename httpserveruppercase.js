var http=require('http');
var fs=require('fs');
var map=require('through2-map');

var port=process.argv[2];
var file=process.argv[3];

var server=http.createServer(function(req, res){
//    fs.createReadStream(file).pipe(res);
    if(req.method!='POST'){
       return res.end('Please send POST\n');
    }
    req.pipe(map(function(chunk){
        return chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(port);
