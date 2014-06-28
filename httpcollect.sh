var http = require('http');
var bl = require('bl');
//var concat = require('concat-steam');
var url = process.argv[2];
http.get(url, function (resp){
    resp.setEncoding('utf8');
    resp.pipe(bl(function(err, data){
    var string = data.toString();
    console.log(string.length);
    console.log(string);
        }));
});
