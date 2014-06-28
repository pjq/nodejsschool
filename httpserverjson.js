var http=require('http');
var url=require('url');

var port=process.argv[2];

var server=http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'application/json'});
    var urlParse =url.parse(req.url, true);
    var query = urlParse.query.iso;
    var date = new Date(query);
    if(urlParse.pathname == '/api/parsetime'){
        var object = new Object();
        object.hour=date.getHours(); 
        object.minute=date.getMinutes();
        object.second=date.getSeconds();

        var member=new Array();
        member[0]="hour";
        member[1]="minute";
        member[2]="second";

        var json=JSON.stringify(object);
        //        console.log(json);
        res.write(json);

    }else if(urlParse.pathname == '/api/unixtime'){
        var object = new Object();
        object.unixtime=date.getTime();
        var json=JSON.stringify(object);
        res.write(json);
    }else{
        res.write(404)
        res.write(req.url+'\n');
        res.write('http://127.0.0.1:'+port+"/api/parsetime?iso=2013-08-10T12:10:15.474Z\n");
        res.write('http://127.0.0.1:'+port+"/api/unixtime?iso=2013-08-10T12:10:15.474Z\n");
    }

    res.end();
});

server.listen(port);
