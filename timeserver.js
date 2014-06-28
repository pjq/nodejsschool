var net=require('net');
var strftime=require('strftime');

var port=process.argv[2];

function getTime(){
    var date = new Date();
    var fmt='20%y-%m-%d %H:%M';
    var time=strftime(fmt, date);

    return time;
}


var server = net.createServer(function(socket){
    
    var time = getTime();
    console.log("receive request "+time);
    socket.write(time);
    socket.write('\n');
    socket.end();
});
console.log(getTime() + " create the server 127.0.0.1:" + port);
server.listen(port);



