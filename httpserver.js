var http=require('http');
var fs=require('fs');
var strftime=require('strftime');

function getTime(){
    var date = new Date();
    var fmt='20%y-%m-%d %H:%M';
    var time=strftime(fmt, date);
    return time;
}

var port=process.argv[2];
var file=process.argv[3];

var server=http.createServer(function(req, res){
    var src = fs.createReadStream(file);
    //console.log(getTime() + " write back " + file);
    src.pipe(res);
});
//console.log(getTime() + " create the server http://127.0.0.1:" + port+"/"+file);
server.listen(port);
